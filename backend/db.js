require('dotenv').config();
const mongoose= require('mongoose');
const { schema, model } = mongoose;

// Connect to MongoDB using the URI from the .env file
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//       console.log("MongoDB connected");
//   })
//   .catch((err) => {
//       console.error("MongoDB connection error:", err);
//   });
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('Failed to connect to MongoDB Atlas', err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;


