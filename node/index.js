const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./route/routes.js");
var cors = require('cors')
const app = express();

mongoose.connect('mongodb://localhost:27017/User', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log("Connected to Database");
    
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
}); 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes)

module.exports = app;

app.listen(2000, () => {
    console.log("Server is listening on port 2000");
});