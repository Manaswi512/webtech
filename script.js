const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');

loginBtn.onclick = () => loginModal.style.display = 'block';
signupBtn.onclick = () => signupModal.style.display = 'block';

closeLogin.onclick = () => loginModal.style.display = 'none';
closeSignup.onclick = () => signupModal.style.display = 'none';

window.onclick = (event) => {
  if (event.target === loginModal) loginModal.style.display = 'none';
  if (event.target === signupModal) signupModal.style.display = 'none';
};


function bookTicket(eventName) {

  const isLoggedIn = false;

  if (!isLoggedIn) {
    loginModal.style.display = 'block';
    return;
  }


  alert(`Booking ticket for: ${eventName}`);
}


document.getElementById('loginForm').onsubmit = (e) => {
  e.preventDefault();

  alert('Login successful!');
  loginModal.style.display = 'none';
};

document.getElementById('signupForm').onsubmit = (e) => {
  e.preventDefault();

  alert('Sign up successful!');
  signupModal.style.display = 'none';
};


document.getElementById('otpLoginBtn').onclick = () => {

  alert('OTP sent to your registered mobile number');
};

document.getElementById('faceLoginBtn').onclick = () => {

  alert('Face recognition feature coming soon');
};

document.getElementById('otpSignupBtn').onclick = () => {

  alert('OTP sent to your registered mobile number');
};

document.getElementById('faceSignupBtn').onclick = () => {

  alert('Face recognition setup coming soon');
};
