
const requestPromise = require('request-promise');
const PolygonLookup = require( 'polygon-lookup' );
const geoJsonData = require("../../../static/formatted-districts-1.json")
const GoogleGeocoderConstants = require('../constants/constants').GoogleGeocoderConstants
const MessageBuilder  = require('../models/mapsResponse').MapsResponseBuilder
const LocationBuilder = require('../models/mapsResponse').LocationResponseBuilder
const getGeocoderRequest = (address) => {
    return {
        method: GoogleGeocoderConstants.method,
        uri: GoogleGeocoderConstants.uri,
        qs: {
            address: address,
            key: GoogleGeocoderConstants.API_KEY
        },
        json: true


    }
}

const googleGeocoderStrategy = async (address) => {

    const request = getGeocoderRequest(address)
   const geoCodeResponse = await requestPromise(request).then((body)=>{
        // console.log(body)
        return body
    }).catch((err)=>{
            console.log(err)
        }
    )
    console.log(geoCodeResponse)
    if(!geoCodeResponse)
        return getErrorResponseBody(address)
    const lookupResponse = getPolyGon(geoCodeResponse)
   if(geoCodeResponse&&lookupResponse)
        return getResponseBody(address,geoCodeResponse,lookupResponse)
   else
        return getErrorResponseBody(address)


}

const getPolyGon = (geocodeResponse) =>{
    const { lat,lng } =  geocodeResponse.results[0].geometry.location
    const lookup = new PolygonLookup(geoJsonData);
    lookup.searchForOnePolygon( lng,lat)
    return lookup
}

const getLatLon = (geocodeResponse) => {
    return  geocodeResponse.results[0].geometry.location
}

const getResponseBody = (address,geoCodeResponse,lookupResponse) =>{
    return new MessageBuilder()
        .setSearch(address)
        .setStatus("OK")
        .setLocation(
            new LocationBuilder()
                .setFormattedAddress(geoCodeResponse.formatted_address)
                .setLatitude(getLatLon(response).lat)
                .setLongitude(getLatLon(response).lng)
                .setServiceArea(lookupResponse.properties.Name)
                .build()
        ).build()
}

const getErrorResponseBody = (address) =>{
    return new MessageBuilder()
        .setSearch(address)
        .setStatus("NOT_FOUND")
        .build()
}

exports.getGeocoderRequest = getGeocoderRequest
exports.getPolyGon = getPolyGon
exports.googleGeocoderStrategy = googleGeocoderStrategy