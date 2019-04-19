const request = require('request');

const geocode = (addr, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + addr + '.json?access_token=pk.eyJ1IjoiZmFsY29uMTY2MSIsImEiOiJjanVqZ2M2em4xbDF3M3lwMDMwMGo1dDRlIn0.BxLRAzRHAOP1xqUx2d5xww';
    const r = {
        url, // es6 object property shorthand used here
        json: true
    };

    request(r, (error, { body } = {}) => {// default parameter given for body
        if (error) {
            callback('Unable to connect location services ', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search ', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longtitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })


};

module.exports = geocode;