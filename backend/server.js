const express = require("express")
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser')
const app = express();
const formRoutes = require('./routes/formTemplates');

app.use(bodyParser.json())
app.use(express.json());
app.use('/form', formRoutes);

app.listen(port , () => {
    console.log("listening on port "+`${port}`);
})