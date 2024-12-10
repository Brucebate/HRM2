
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import "./LoginSignup.css";


const LoginSignup = () => {
  const [isEmployee, setIsEmployee] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  
  const history = useNavigate();
  const [employeeId, setEmployee] = useState('');
  const [password, setPassword] = useState(" ");
  
  const navigate = useNavigate();
  

  const handleToggle = () => {
    setIsEmployee(!isEmployee);
  };

  
  const handleSignup = () => {
    navigate('/signup');
  };
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const handleForgotpassword = () => {
    navigate('/forgot-password')
  };

 



const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

async function handleLogin(e) {
  e.preventDefault();

  try {
    const res = await axios.post(`${API_BASE_URL}/login` ,{
      employeeId,
      password
    });

    if (res.data.status === "exist") {
      if (res.data.role === "admin" && !isEmployee) {
        navigate("/admin", { state: { name: res.data.name } });
      } else if (res.data.role === "employee" && isEmployee) {
        navigate("/employee", { state: { name : res.data} });
      }else {
          alert("you are trying to login with wrong role")
      }
    } else if (res.data.status === "notexist") {
      alert("User does not exist. Please sign up.");
    } else {
      alert("An error occurred. Please try again.");
    }
  } catch (e) {
    alert("Wrong details or server error.");
    console.error(e);
  }
}

  return (
    <div className="page-container">
      <div className="page-heading">
        <h1>THE HARD CASH - HRM TOOL</h1>
      </div>
      <div className="wrapper">
        <div className="title-text">
          <div className={`title ${isEmployee ? "employee" : "admin"}`}>
            {isEmployee ? "Employee Login" : "Admin Login"}
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="admin"
              checked={!isEmployee}
              readOnly
            />
            <input
              type="radio"
              name="slide"
              id="employee"
              checked={isEmployee}
              readOnly
            />
            <label
              htmlFor="admin"
              className="slide admin"
              onClick={() => setIsEmployee(false)}
            >
              Admin Login
            </label>
            <label
              htmlFor="employee"
              className="slide employee"
              onClick={() => setIsEmployee(true)}
            >
              Employee Login
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form onSubmit={handleLogin} className="login"
              style={{ transform: `translateX(${isEmployee ? "-100%" : "0"})` }}
            >
            
            <div className="field">
                {/* <input type="text" name="employeeId" placeholder="Id"  onChange={(e) => setId(e.target.value)} required/> */}
                <input
                                type="text"
                                // pattern="[0-9]*"
                                // maxLength="6"
                                // minLength="6"
                                name="employeeId"
                                placeholder="Employee Id"
                                onChange={(e) => setEmployee(e.target.value)}
                                required
                                />
              </div>
              <div className="field">
                <input
                  type={passwordShown ? "text" : "password"}
                  // maxLength="11"
                  // minLength="9"
                  name="password"
                  placeholder="Enter a strong password"
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                />
                <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
                </span>
                
              </div>
              <div className="pass-link">
                <a href="#" onClick={handleForgotpassword}>Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" /> 
            
               
              </div>
              
              <div className="signup-link">
                Don't have an account? Register yourself{" "}
                <button type="button" className="link-button" onClick={handleSignup}>
                  Sign up
                </button>
              </div>
            </form>
            <form
              onSubmit={handleLogin}
              className="login"
              style={{ transform: `translateX(${isEmployee ? "-100%" : "0"})` }}
            >
              <div className="field">
                {/* <input type="text" name="employeeId" placeholder="Employee Id" onChange={(e) => setId(e.target.value)}/> */}
                <input
                  type="text"
                  // pattern="[0-9]*"
                  // maxLength="6"
                  // minLength="6"
                  name="employeeId"
                  placeholder="Employee Id"
                  onChange={(e) => setEmployee(e.target.value)}
                  
                  required
                  />
              </div>
              
              <div className="field">
                <input
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required 
                  onChange={(e) => setPassword(e.target.value)}
                />
                 <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
                </span>
              </div> 
              
              
              <div className="pass-link">
                <a href="#" onClick={handleForgotpassword}>Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                 <input type="submit" value="Login"/>
                </div>
              <div className="signup-link">
                Don't have an account? Register yourself{" "}
                <button type="button" className="link-button" onClick={handleSignup}>
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;



