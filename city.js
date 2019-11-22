const mongoose = require('mongoose');
const citySchema = mongoose.Schema({
  name: {
    type: String,
    requiere: true,
    unique: true,
  },
  country: {
    type: String,
    requiere: true,
  },
  img: {
    type: String,
  }
}

)


 
  
// }); {coleccion: "ciudades"}

module.exports  = mongoose.model("Ciudades", citySchema);
