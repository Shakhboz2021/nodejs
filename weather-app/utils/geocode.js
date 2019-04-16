const request = require('request');

const geocode = (addr, callback) => {
    const urlGeocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + addr + '.json?access_token=pk.eyJ1IjoiZmFsY29uMTY2MSIsImEiOiJjanVqZ2M2em4xbDF3M3lwMDMwMGo1dDRlIn0.BxLRAzRHAOP1xqUx2d5xww'
    const r = {
        url: urlGeocode,
        json: true
    };

    request(r, (error, response) => {
        if (error) {
            callback('Unable to connect location services ', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search ', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })


};

module.exports = geocode;