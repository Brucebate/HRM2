

// second try
    
    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
    import axios from'axios';
    import "./SignUp.css";
    
    
    const SignUp = () => {
      const [passwordShown, setPasswordShown] = useState(false);
      const history = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [name, setName] = useState('');
      const [employeeId, setEmployee] = useState('');
      const [mobile, setMobile] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('')
      const [role, setRole] = useState('employee');
      

      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
    
      const navigate = useNavigate();
    
      
    
      const handleLogin = () => {
        navigate('/');
      };
      const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
      };
      

      async function submit(e) {
        e.preventDefault();

        if(password !== confirmPassword){
            alert("Password doesn't match");
            return
        }
    
        try {
            const response = await axios.post(`${API_BASE_URL}/signup`, {
                name,
                email,
                role,
                employeeId,
                mobile,
                password
            });
    
            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                history("/admin", { state: { id: employeeId} });
                alert("Sign up Successful");
                navigate("/");
                setName('');
                setEmail('');
                setEmployee('');
                setRole('employee');
               setMobile('');
               setPassword('');
               setConfirmPassword('');
            }
        } catch (error) {
            alert("Error signing up");
            console.error(error);
        }
    }
    
 
      return (
        <div className="page-container2">
          <div className="wrapper2">
            <div className="title-text2">
              <div className="title2">Sign Up</div>
            </div>
            <div className="form-container2">
              <div className="form-inner2">
                <form onSubmit={submit} className="signup">
                  <div className="field2">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      // value={formData.fullName}
                      // onChange={handleChange}
                      required 
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="field2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      // value={formData.email}
                      // onChange={handleChange}
                      required 
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="field2">
                    <input
                      type="text"
                      pattern="[0-9]*"
                      maxLength="6"
                      minLength="6"
                      name="employeeId"
                      placeholder="Employee Id"
                      // value={formData.employeeId}
                      // onChange={handleChange}
                      required 
                      onChange={(e) => setEmployee(e.target.value)}
                    />
                  </div>

                  <div className="field2">

                  <select name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>



                  <div className="field2">
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      // value={formData.mobileNumber}
                      // onChange={handleChange}
                      required 
                      onChange= {(e) => setMobile(e.target.value)}
      
                    />
                  </div>
                  <div className="field2">
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      placeholder="Create Password"
                      // value={formData.password}
                      // onChange={handleChange}
                      required 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="password-toggle-icon1" onClick={togglePasswordVisibility}>
                   <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
                </span>
                
                  </div>
                  <div className="field2">
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      // value={formData.confirmPassword}
                      // onChange={handleChange}
                      required 
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className="password-toggle-icon2" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
                </span>
                
                  </div>
                  <div className="field2 btn2">
                    <div className="btn-layer2"></div>
                    <input type="submit" value="Sign Up" />
                  </div>
                  <div className="login-link2">
                    Already have an account?{" "}
                    <button type="button" className="link-button" onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
  export default SignUp


  