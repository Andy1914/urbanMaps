const MessageBuilder  = require('../models/maps_response').MapsResponseBuilder
const LocationBuilder = require('../models/maps_response').LocationResponseBuilder
const PolygonLookup = require( 'polygon-lookup' );
const geoJsonData = require("../../../static/formatted-districts-1.json")

const getErrorResponseBody = (address) =>{
    return new MessageBuilder()
        .setSearch(address)
        .setStatus("NOT_FOUND")
        .build()
}

const getResponseBody = (address,geoCodeResponse,lookupResponse) =>{
    return new MessageBuilder()
        .setSearch(address)
        .setStatus("OK")
        .setLocation(
            new LocationBuilder()
                .setFormattedAddress(geoCodeResponse.results[0].formatted_address)
                .setLatitude(getLatLon(geoCodeResponse).lat)
                .setLongitude(getLatLon(geoCodeResponse).lng)
                .setServiceArea(lookupResponse.properties.Name)
                .build()
        ).build()
}

const getLatLon = (geocodeResponse) => {
    return  geocodeResponse.results[0].geometry.location
}

const getPolyGon = (geocodeResponse) =>{
    const { lat,lng } = getLatLon(geocodeResponse)
    const lookup = new PolygonLookup(geoJsonData);
    const  lookUpResponse = lookup.searchForOnePolygon( lng,lat)
    console.log(lookUpResponse)
    return lookUpResponse
}


exports.getErrorResponseBody = getErrorResponseBody
exports.getResponseBody = getResponseBody
exports.getLatLon = getLatLon
exports.getPolyGon =getPolyGon