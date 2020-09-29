
const constants = require('../constants/constants')
const googleGeoCode = require('../service/google_geocode_service')


const getGeocodeResolution = ( geocoderServicetype="google", address )=>{

    switch (geocoderServicetype){
        case constants.supportedGeocoders.GOOGLE:
            console.log("using google service for geocoding")
            return googleGeoCode.googleGeocoderStrategy(address)
        default:
            console.log("using fallback service for geocoding")
            return googleGeoCode.googleGeocoderStrategy(address)
    }


}

exports.getGeocodeResolution = getGeocodeResolution