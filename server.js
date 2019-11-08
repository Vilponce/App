const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoUrl = require("./keys.js");

const app = express();

//bodyparsen Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.send ('Hello From Express'));


// //connect to mongo
mongoose
.connect(mongoUrl.mongoURI)
.then (()=> console.log("MongoDB Connected..."))
.catch(err => console.log(err) );

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));