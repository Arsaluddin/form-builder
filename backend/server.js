const express = require("express");
const cors = require("cors"); // Import the cors middleware
require('dotenv').config();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const app = express();
const formRoutes = require('./routes/formTemplates');
const connectDB = require('./db/connect');

app.use(cors()); // Use the cors middleware
app.use(bodyParser.json());
app.use(express.json());
app.use('/forms', formRoutes);

connectDB();

app.listen(port, () => {
    console.log("listening on port " + `${port}`);
});
