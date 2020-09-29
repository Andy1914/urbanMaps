const GoogleGeocoderConstants = require('../constants/constants').GoogleGeocoderConstants
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

exports.getGeocoderRequest = getGeocoderRequest