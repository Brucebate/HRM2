import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Verification.css';

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  const handleVerify = () => {
    const code = verificationCode.join('');
    if (code.length === 4) {
      console.log('Verification code:', code);
      // Add logic to verify the code
      navigate('/set-new-password'); // Navigate to the set new password page upon successful verification
    } else {
      alert('Please enter the complete verification code.');
    }
  };

  const handleResendCode = () => {
    console.log('Resend code');
    // Add logic to resend the verification code
    // Example: Call API to resend OTP
  };

  return (
    <div className="verification-container">
      <div className="verification-wrapper">
        <h2>Verification</h2>
        <p>Enter verification code</p>
        <div className="verification-code">
          {verificationCode.map((code, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={code}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>
        <p>If you don't receive the code!</p>
        <div className="resend-link" onClick={handleResendCode}>
          Resend
        </div>
        <div className="field btn">
          <button onClick={handleVerify}>Verify</button>
        </div>
      </div>
    </div>
  );
};

export default Verification;
