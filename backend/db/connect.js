const mongoose = require('mongoose');
require('dotenv').config();


// key --> tFH50Qyb33Q7PVtw 

// mongoose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;