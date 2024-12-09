// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import axios from 'axios';
// import "./LoginSignup.css";


// const LoginSignup = () => {
//   const [isEmployee, setIsEmployee] = useState(false);
//   const [passwordShown, setPasswordShown] = useState(false);
  
//   const history = useNavigate();
//   const [id, setid] = useState("");
//   const [password, setpassword] = useState("");
  
//   const navigate = useNavigate();
  

//   const handleToggle = () => {
//     setIsEmployee(!isEmployee);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const employeeId = e.target.elements.employeeId.value;
//     const password = e.target.elements.password.value;

//     console.log("Login Info:");
//     console.log("Employee ID:", employeeId);
//     console.log("Password:", password);
//   };

//   const handleSignup = () => {
//     navigate('/signup');
//   };
//   const togglePasswordVisibility = () => {
//     setPasswordShown(!passwordShown);
//   };
//   const handleForgotpassword = () => {
//     navigate('/forgot-password')
//   }
//   async function submit(e) {
//     e.preventDefault();

//     try {
//         await axios.post("http://localhost:8000/", {
//             id,
//             password
//         })
//         .then(res => {
//             if (res.data === "exist") {
//                 history("/home", { state: { id: id} }); // Corrected history usage
//             } else if (res.data === "notexist") {
//                 alert("User has not signed up"); // Corrected alert message
//             }
//         })
//         .catch(e => {
//             alert("Wrong details");
//             console.log(e);
//         });

//     } catch (e) {
//         console.log(e);
//     }
// }

  
  
  

//   return (
//     <div className="page-container">
//       <div className="page-heading">
//         <h1>THE HARD CASH - HRM TOOL</h1>
//       </div>
//       <div className="wrapper">
//         <div className="title-text">
//           <div className={`title ${isEmployee ? "employee" : "admin"}`}>
//             {isEmployee ? "Employee Login" : "Admin Login"}
//           </div>
//         </div>
//         <div className="form-container">
//           <div className="slide-controls">
//             <input
//               type="radio"
//               name="slide"
//               id="admin"
//               checked={!isEmployee}
//               readOnly
//             />
//             <input
//               type="radio"
//               name="slide"
//               id="employee"
//               checked={isEmployee}
//               readOnly
//             />
//             <label
//               htmlFor="admin"
//               className="slide admin"
//               onClick={() => setIsEmployee(false)}
//             >
//               Admin Login
//             </label>
//             <label
//               htmlFor="employee"
//               className="slide employee"
//               onClick={() => setIsEmployee(true)}
//             >
//               Employee Login
//             </label>
//             <div className="slider-tab"></div>
//           </div>
//           <div className="form-inner">
//             <form
//               onSubmit={handleLogin}
            
//               className="login"
//               style={{ transform: `translateX(${isEmployee ? "-100%" : "0"})` }}
//             >
            
//             <div className="field">
//                 <input type="text" name="employeeId" placeholder="Id" required onChange={(e) => setid(e.target.value)}/>
//               </div>
//               <div className="field">
//                 <input
//                   type={passwordShown ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   required onChange={(e) => setpassword(e.target.value)}
//                 />
//                 <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
//                   <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
//                 </span>
                
//               </div>
//               <div className="pass-link">
//                 <a href="#" onClick={handleForgotpassword}>Forgot password?</a>
//               </div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <input type="submit" value="Login" /> 
            
//                 {/* <button type="submit"
//                 onClick={handleOnSubmit}>Login</button> */}
//               </div>
//               <div className="signup-link">
//                 Don't have an account? Register yourself{" "}
//                 <button type="button" className="link-button" onClick={handleSignup}>
//                   Sign up
//                 </button>
//               </div>
//             </form>
//             <form
//               onSubmit={handleLogin}
//               className="login"
//               style={{ transform: `translateX(${isEmployee ? "-100%" : "0"})` }}
//             >
//               <div className="field">
//                 <input type="text" name="employeeId" placeholder="Employee Id"/>
//               </div>
              
//               <div className="field">
//                 <input
//                   type={passwordShown ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   required 
//                 />
//                  <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
//                   <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
//                 </span>
//               </div> 
              
              
//               <div className="pass-link">
//                 <a href="#" onClick={handleForgotpassword}>Forgot password?</a>
//               </div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                  <input type="submit" value="Login"/>
//                 </div>
//               <div className="signup-link">
//                 Don't have an account? Register yourself{" "}
//                 <button type="button" className="link-button" onClick={handleSignup}>
//                   Sign up
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



// second try

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

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   const employeeId = e.target.elements.employeeId.value;
  //   const password = e.target.elements.password.value;

  //   console.log("Login Info:");
  //   console.log("Employee ID:", employeeId);
  //   console.log("Password:", password);
  // };

  const handleSignup = () => {
    navigate('/signup');
  };
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const handleForgotpassword = () => {
    navigate('/forgot-password')
  };

 




  async function handleLogin(e) {
              e.preventDefault();

// second code
// try {
//   const response = await axios.post("http://localhost:8000/", {
//     employeeId,
//     password
//   });

//   const responseData = response.data; // Assuming response data structure matches { data: "exist" or "notexist" }

//   if (responseData === "exist") {
//     navigate('/home', { state: { id: employeeId } });
//   } else if (responseData === "notexist") {
//     alert("User has not signed up");
//   } else {
//     alert("Unknown response from server");
//   }
// } catch (error) {
//   alert("Error logging in. Please try again.");
//   console.error(error);
// }
// }

// async function handleLogin(employeeId, password, isEmployee) {
//   try {
//     const response = await axios.post("http://localhost:8000/", {
//       employeeId,
//       password
//     });

//     const responseData = response.data;

//     if (responseData.exist) {
//       const { role} = responseData;
//       if (role === "admin" && !isEmployee) {
//         navigate("/home", { state: { id :employeeId} });
//       } else if (role === "employee" && isEmployee) {
//         navigate("/home", { state: { id :employeeId} });
//       } else {
//         alert("You are trying to login with the wrong role");
//       }
//     } else if (responseData.exist === false) {
//       alert("User has not signed up");
//     } else {
//       alert("Unknown response from server");
//     }
//   } catch (error) {
//     alert("Error logging in. Please try again.");
//     console.error("Error:", error);
//   }
// }

try {
  const res = await axios.post("http://localhost:8000/", {
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

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import axios from 'axios';
// import "./LoginSignup.css";

// const LoginSignup = () => {
//   const [isEmployee, setIsEmployee] = useState(false);
//   const [passwordShown, setPasswordShown] = useState(false);
//   const [id, setId] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const togglePasswordVisibility = () => {
//     setPasswordShown(!passwordShown);
//   };

//   const handleForgotPassword = () => {
//     navigate('/forgot-password');
//   };

//   const handleSignup = () => {
//     navigate('/signup');
//   };

//   const submit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:8000/", {
//         id,
//         password
//       });

//       const { data } = response;

//       if (data === "exist") {
//         navigate('/home', { state: { id } });
//       } else if (data === "notexist") {
//         alert("User has not signed up");
//       } else {
//         alert("Unknown response from server");
//       }
//     } catch (error) {
//       alert("Error logging in. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="page-container">
//       <div className="page-heading">
//         <h1>THE HARD CASH - HRM TOOL</h1>
//       </div>
//       <div className="wrapper">
//         <div className="title-text">
//           <div className={`title ${isEmployee ? "employee" : "admin"}`}>
//             {isEmployee ? "Employee Login" : "Admin Login"}
//           </div>
//         </div>
//         <div className="form-container">
//           <div className="slide-controls">
//             <input
//               type="radio"
//               name="slide"
//               id="admin"
//               checked={!isEmployee}
//               readOnly
//             />
//             <input
//               type="radio"
//               name="slide"
//               id="employee"
//               checked={isEmployee}
//               readOnly
//             />
//             <label
//               htmlFor="admin"
//               className="slide admin"
//               onClick={() => setIsEmployee(false)}
//             >
//               Admin Login
//             </label>
//             <label
//               htmlFor="employee"
//               className="slide employee"
//               onClick={() => setIsEmployee(true)}
//             >
//               Employee Login
//             </label>
//             <div className="slider-tab"></div>
//           </div>
//           <div className="form-inner">
//             <form onSubmit={submit} className="login"
//               style={{ transform: `translateX(${isEmployee ? "-100%" : "0"})` }}
//             >
//               <div className="field">
//                 <input
//                   type="text"
//                   name="employeeId"
//                   placeholder="Employee Id"
//                   value={id}
//                   onChange={(e) => setId(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="field">
//                 <input
//                   type={passwordShown ? "text" : "password"}
//                   name="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
//                   <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} />
//                 </span>
//               </div>
//               <div className="pass-link">
//                 <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
//               </div>
//               <div className="field btn">
//                 <div className="btn-layer"></div>
//                 <input type="submit" value="Login" />
//               </div>
//               <div className="signup-link">
//                 Don't have an account? Register yourself{" "}
//                 <button type="button" className="link-button" onClick={handleSignup}>
//                   Sign up
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;



