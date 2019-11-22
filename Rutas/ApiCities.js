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

module.exports = router;    