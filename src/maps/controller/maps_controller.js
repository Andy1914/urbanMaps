const express = require('express');
const router = express.Router();
const mapService  = require('../service/map_service')

// Home page route.
router.get('/', function (req, res) {

    const response =mapService.googleGeocoderStrategy(req.query.address)
    res.send(response)


})

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

module.exports = router;