import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SetNewPassword.css';

const SetNewPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 9) {
      alert('Password must be at least 9 characters long.');
    } else if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
    } else {
      console.log('New password set:', newPassword);
      // Add logic to update the password in the backend
      navigate('/'); // Navigate to login or another page after successful password update
    }
  };

  return (
    <div className="set-password-container">
      <div className="set-password-wrapper">
        <h2>New Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Set New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              required
            />
          </div>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="field btn1">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;
