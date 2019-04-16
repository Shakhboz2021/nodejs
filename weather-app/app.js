const request = require('request');

const url = 'https://api.darksky.net/forecast/be210a1cedf52bd8d74c6f45e47fbb78/37.8267,-122.4233?units=si';
const urlGeocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmFsY29uMTY2MSIsImEiOiJjanVqZ2M2em4xbDF3M3lwMDMwMGo1dDRlIn0.BxLRAzRHAOP1xqUx2d5xww';
const r = {
    url: url,
    json: true
};
const r_ = {
    url: urlGeocode,
    json: true
};

request(r, (error, response) => {
    if (error) {
        console.log('cannot connect to weather service')
    } else if(response.body.error) {
        console.log(response.body.error)
    } else {
        console.log('It is currently ' + response.body.currently.temperature + ' Celsius');
        console.log('There is a ' + response.body.currently.precipProbability + ' chance of rain');
    }

});

request(r_, (error, response) => {
    if (error) {
        console.log('network error')
    } else if (response.body.features.length < 0) {
        console.log('location is not valid')
    } else {
        console.log('latitude is ' + response.body.features[0].center[0]);
        console.log('longtitude is ' + response.body.features[0].center[1]);
    }

});