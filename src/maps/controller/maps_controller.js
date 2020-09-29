const express = require('express');
const router = express.Router();
const mapService  = require('../service/map_service')


router.get('/',  async (req, res) => {

    const response = await mapService.getGeocodeResolution("google",req.query.address)
    res.send(response)


})


router.get('/test', function (req, res) {
    res.send('Welcome to map api');
})

module.exports = router;