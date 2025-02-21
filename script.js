// Dummy function for booking tickets
function bookTicket(item) {
    alert(`Booking for ${item}`);
  }
  
  // Modal functionality for Login and Sign Up
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const closeLogin = document.getElementById('closeLogin');
  const closeSignup = document.getElementById('closeSignup');
  
  // Open modals on button click
  loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });
  
  signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
  });
  
  // Close modals when clicking on close span
  closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });
  closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
  });
  
  // Close modals when clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target == loginModal) {
      loginModal.style.display = 'none';
    }
    if (e.target == signupModal) {
      signupModal.style.display = 'none';
    }
  });
  
  // Dummy functions for OTP and Face Recognition flows
  document.getElementById('otpLoginBtn').addEventListener('click', () => {
    alert("OTP sent to your registered mobile/email for login.");
  });
  
  document.getElementById('faceLoginBtn').addEventListener('click', () => {
    alert("Initiating face recognition for login... (This is a placeholder)");
  });
  
  document.getElementById('otpSignupBtn').addEventListener('click', () => {
    alert("OTP sent to verify your account.");
  });
  
  document.getElementById('faceSignupBtn').addEventListener('click', () => {
    alert("Initiating face recognition setup... (This is a placeholder)");
  });
  