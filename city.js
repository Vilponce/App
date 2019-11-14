var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
 
  
}); {coleccion: "ciudades"}

const Ciudad = mongoose.model("Ciudad", Schema);
