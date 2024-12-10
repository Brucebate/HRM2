// require('dotenv').config();
// const express = require('express');
// const cors = require("cors");
// const app = express();
// // const connectDB= require('./db.js');
// const User = require("./db");
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const SECRET_KEY = process.env.SECRET_KEY;
// app.use(cors({
//   origin: process.env.FRONTEND_URL,
//   methods: ["GET", "POST"],
//   credentials: true // allow cookies
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.get("/message", (req, res) => {
//   res.json({ message: " " });
// });


// app.post("/", async (req, res) => {
//     const { employeeId, password } = req.body;
//     res.send("Hello")
  
//     try {
//       const user = await User.findOne({ employeeId: employeeId });
  
  
//   console.log("user found:", user)
//     if (user) {
//       res.json({status: "exist", name: user.name, role: user.role});
//     } else {
//       res.json({status: "notexist"});
//     }
//   } catch (e) {
//     console.error("Error:", e);
//     res.json({status: "error"});
//   }
// });

  

// app.post("/signup", async (req, res) => {
//   const { name, email, employeeId, role, mobile,  password } = req.body;

//   try {
//     const existingUser = await User.findOne({employeeId: employeeId  });

//     if (existingUser) {
//       res.json("exist");
//     } else {
//       const newUser = new User({
//         name: name,
//         email: email,
//         employeeId: employeeId,
//         role: role,
//         mobile: mobile,
//         password: password

//       });

//       await newUser.save();
//       res.json("notexist");
//     }
//   } catch (e) {
//     console.error("Error:", e);
//     res.json("error");
//   }
// });

// const transporter = nodemailer.createTransport({
//   service:'gmail',
//   host:'smtp.gmail.com',
//   port: 465,
//   secure: true, // true for 587, false for other ports
//   // requireTLS: true,

//   auth: {
//       user: process.env.NODE_USER,
//       pass: process.env.NODE_PASS
//   }
// });

// app.post('/forgot-password', async (req, res) => {
//   const { email } = req.body;
//   const user = await User.findOne({email});

//   if(!user){
//     return res.status(400).json({message: 'User not found'})
//   }

//   const otp = Math.floor(1000 + Math.random() * 9000);
//   const token = jwt.sign({email, otp}, SECRET_KEY, {expiresIn: '1h'})

//   const mailOptions = {
//     from: process.env.NODE_USER,
//     to: email,
//     subject: "password reset OTP",
//     text: `Your otp is ${otp}`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       return res.status(500).json({message: 'Error sending email'})
//     }
//     console.log('Email sent: ' + info.response);
//     res.status(200).json({token});
//   });
// });


// const port = process.env.PORT || 3000;  // Use the PORT from .env, fallback to 3000 if not set

// app.listen(port, '0.0.0.0', () => {
//   console.log(`Server running on port ${port}`);
// });


require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
// const connectDB= require('./db.js');
const User = require("./db");
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST"],
  credentials: true // allow cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello World!');  // Response for the root route
});

app.get("/message", (req, res) => {
  res.json({ message: " " });
});

app.post("/", async (req, res) => {
    const { employeeId, password } = req.body;
    res.send("Hello");

    try {
      const user = await User.findOne({ employeeId: employeeId });

      console.log("user found:", user);
      if (user) {
        res.json({status: "exist", name: user.name, role: user.role});
      } else {
        res.json({status: "notexist"});
      }
    } catch (e) {
      console.error("Error:", e);
      res.json({status: "error"});
    }
});

app.post("/signup", async (req, res) => {
  const { name, email, employeeId, role, mobile, password } = req.body;

  try {
    const existingUser = await User.findOne({employeeId: employeeId});

    if (existingUser) {
      res.json("exist");
    } else {
      const newUser = new User({
        name: name,
        email: email,
        employeeId: employeeId,
        role: role,
        mobile: mobile,
        password: password
      });

      await newUser.save();
      res.json("notexist");
    }
  } catch (e) {
    console.error("Error:", e);
    res.json("error");
  }
});

const transporter = nodemailer.createTransport({
  service:'gmail',
  host:'smtp.gmail.com',
  port: 465,
  secure: true, // true for 587, false for other ports
  auth: {
      user: process.env.NODE_USER,
      pass: process.env.NODE_PASS
  }
});

app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({message: 'User not found'})
  }

  const otp = Math.floor(1000 + Math.random() * 9000);
  const token = jwt.sign({email, otp}, SECRET_KEY, {expiresIn: '1h'})

  const mailOptions = {
    from: process.env.NODE_USER,
    to: email,
    subject: "password reset OTP",
    text: `Your otp is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({message: 'Error sending email'})
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({token});
  });
});

const port = process.env.PORT || 8000;  // Use the PORT from .env, fallback to 8000 if not set

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});
