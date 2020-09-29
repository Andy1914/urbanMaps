class MapsResponse {
    constructor(builder) {
        this.status = builder.status,
        this.search = builder.search
        this.location  = builder.location

    }
}

class MapsResponseBuilder {
    setStatus(status){
        this.status = status
        return this
    }
    setSearch(search){
        this.search = search
        return this
    }
    setLocation(location){
        this.location = location
        return this
    }
    build(){
        return new MapsResponse(this)
    }
}

class LocationResponse {
    constructor(builder) {
        this.latitude = builder.latitude,
        this.longitude = builder.longitude
        this.formattedAddress  = builder.formattedAddress
        this.serviceArea = builder.serviceArea

    }
}

class LocationResponseBuilder {
    setLatitude(latitude){
        this.latitude = latitude
        return this
    }
    setLongitude(longitude){
        this.longitude = longitude
        return this
    }
    setFormattedAddress(formattedAddress){
        this.formattedAddress = formattedAddress
        return this
    }
    setServiceArea(serviceArea){
        this.serviceArea = serviceArea
        return this
    }
    build(){
        return new LocationResponse(this)
    }
}

exports.MapsResponseBuilder = MapsResponseBuilder
exports.LocationResponseBuilder = LocationResponseBuilder