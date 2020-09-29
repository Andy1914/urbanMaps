const requestPromise = require('request-promise');
const mapUtils = require('../util/map_utils')
const geocoderRequest = require('../models/geocoder_request')

const googleGeocoderStrategy = async (address) => {
    const request = geocoderRequest.getGeocoderRequest(address)
    const geoCodeResponse = await requestPromise(request)
    try {
        if (!geoCodeResponse)
            return mapUtils.getErrorResponseBody(address)
        const lookupResponse = mapUtils.getPolyGon(geoCodeResponse)
        if (geoCodeResponse && lookupResponse) {
            return mapUtils.getResponseBody(address, geoCodeResponse, lookupResponse)
        } else
            return mapUtils.getErrorResponseBody(address)
    } catch (e) {
        console.log(e)
        return mapUtils.getErrorResponseBody(address)

    }

}

exports.googleGeocoderStrategy = googleGeocoderStrategy