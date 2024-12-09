import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    console.log('OTP sent to:', email);
     
    try{
      const response = await axios.post('http://localhost:8000/forgot-password', { email });
      localStorage.setItem('resetToken', response.data.token);
      navigate('/otp-verification')
  } catch (error) {
      console.error(error);
      alert('error sending otp')
  }
      

  };
  const isValidEmail = () => {
    // Check if mobileNumber is exactly 10 digits
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);           
  };
  const handleBackToSignIn = () => {
    navigate('/');
  };

  // Function to check if mobile number is valid
  

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-wrapper">
        <h2>Forgot Password</h2>
        <div className="field">
          <label>Enter Email Id</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Id"
            required
          />
        </div>
        <div className="field btn">
          <button onClick={handleSendOtp} disabled={!isValidEmail()}>
            Send OTP
          </button>
        </div>
        <div className="back-to-signin">
          <a href="#" onClick={handleBackToSignIn}>
            Back to Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
