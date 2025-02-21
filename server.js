const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Failed", err));


const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    otp: String,
    faceData: String,
});
const User = mongoose.model("User", UserSchema);


const TicketSchema = new mongoose.Schema({
    userId: String,
    eventName: String,
    date: Date,
});
const Ticket = mongoose.model("Ticket", TicketSchema);


app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Signup failed" });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
});

app.post("/send-otp", async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await User.findOneAndUpdate({ email }, { otp });

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
    });
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is ${otp}`,
    });
    res.json({ message: "OTP Sent" });
});

app.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;
    const user = await User.findOne({ email, otp });
    if (!user) return res.status(400).json({ error: "Invalid OTP" });
    res.json({ message: "OTP Verified" });
});

app.post("/book-ticket", async (req, res) => {
    const { token, eventName } = req.body;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const newTicket = new Ticket({ userId: decoded.userId, eventName, date: new Date() });
        await newTicket.save();
        res.json({ message: "Ticket booked successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Booking failed" });
    }
});

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
