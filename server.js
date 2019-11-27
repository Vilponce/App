const express = require("express");
const app = express();
const mongoUrl = require("./keys.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const ApiCities = require("./Rutas/ApiCities")
const cors = require("cors")



app.use(cors())


//bodyparsen Middleware
app.use(bodyParser());



app.get('/', (req, res) => res.send ('Hello From Express'));


// //connect to mongo
mongoose
.connect(mongoUrl.mongoURI)
.then (()=> console.log("MongoDB Connected..."))
.catch(err => console.log(err) );

app.use("/api", ApiCities)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));