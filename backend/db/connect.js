const mongoose = require('mongoose');
// key --> tFH50Qyb33Q7PVtw 

mongoose.connect('mongodb+srv://arsaluddin134:tFH50Qyb33Q7PVtw@cluster0.qrdtcpl.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});