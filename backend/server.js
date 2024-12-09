const express = require('express');
const cors = require("cors");
const app = express();
// const connectDB= require('./db.js');
const User = require("./db");
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 's3cr3tK3y!@#4567GHIJKLMNOPtrstu'
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ["GET", "POST"],
  credentials: true // allow cookies
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connectDB()

app.get("/message", (req, res) => {
  res.json({ message: " " });
});

// app.post("/", async (req, res) => {
//   const { employeeId, password } = req.body;

//   try {
//     const user = await User.findOne({ employeeId: employeeId });

//     if (user) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//     }
//   } catch (e) {
//     console.error("Error:", e);
//     res.json("error");
//   }
// });


app.post("/", async (req, res) => {
    const { employeeId, password } = req.body;
  
    try {
      const user = await User.findOne({ employeeId: employeeId });
  
  //     if (user) {
  //       res.json("exist");
  //       res.json({ role: user.role });
        
  //     } else {
  //       res.json("notexist");
  //     }
  //   } catch (e) {
  //     console.error("Error:", e);
  //     res.json("error");
  //   }
  // });
  console.log("user found:", user)
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
  const { name, email, employeeId, role, mobile,  password } = req.body;

  try {
    const existingUser = await User.findOne({employeeId: employeeId  });

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
  // requireTLS: true,

  auth: {
      user: 'thehardcashindia@gmail.com',
    pass: 'rclp swlm utxu jxch'
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
    from: 'thehardcashindia@gmail.com',
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



app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
  
   // app.post("/register", async (req, resp) => {
  //   try {
  //       const user = new user(req.body);
  //       let result = await user.save();
  //       result = result.toObject();
  //       if (result) {
  //           delete result.Password;
  //           resp.send(req.body);
  //           console.log(result);
  //       } else {
  //           console.log("User already register");
  //       }
  
  //   } catch (e) {
  //       resp.send("Something Went Wrong");
  //   }
  // }); 
