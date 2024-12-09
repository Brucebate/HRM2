
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUp from './Components/SignUp';
// import LoginSignup from './Components/LoginSignup';
// import ForgotPassword from './Components/ForgotPassword';
// import Verification from './Components/Verification';
// import SetNewPassword from './Components/SetNewPassword';

// function App() {
  

//   return (
//     <Router>
      
//         <Routes>
//           <Route path="/loginsignup" element={<LoginSignup />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/" element={<LoginSignup />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/otp-verification" element={<Verification />} />
//           <Route path="/set-new-password" element={<SetNewPassword />} />
//         </Routes>
        
//     </Router>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:8000/message")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <h1>{message}</h1>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LoginSignup from './Components/LoginSignup';
import ForgotPassword from './Components/ForgotPassword';
import Verification from './Components/Verification';
import SetNewPassword from './Components/SetNewPassword';
import React, { useState, useEffect } from "react";
import Employee from "./Components/Employee";
import Admin from "./Components/Admin";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  

  return (
    <><div className="App">
      <h1>{message}</h1>
    </div>
    <Router>

        <Routes>
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<LoginSignup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<Verification />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/admin" element={<Admin/>}/>
        
        </Routes>

      </Router></>
    
  );
}

export default App;




