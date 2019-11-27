const express = require("express");

const router= express.Router()

const cityModel = require('../city.js')

/*get all cities*/
router.get('/cities/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

    router.post('/cities/all', (req, res) => {
        
        
        cityModel.find(req.body)
            .then(file => {
                if(file.length) {
                    res.json({success: false})
                } else{ 
                    const newCity = new cityModel({
                        name: req.body.name,
                        country: req.body.country
                    })
                    newCity.save() .then(city => {
                                res.send(city)
                            })
                            .catch(err => {
                                res.status(500).send("Server error")}) 
                }
            })
    });
    
    
    
    
    
module.exports = router;    