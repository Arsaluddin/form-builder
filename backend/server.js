const express = require("express")
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require('./db/connect');
const formTemplatesRouter = require('./routes/formTemplates');

app.use(express.json());
app.use('/', formTemplatesRouter);

app.listen(port , () => {
    console.log("listening on port "+`${port}`);
})