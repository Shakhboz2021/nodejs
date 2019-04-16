const request = require('request');

const forecast = (langtitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/be210a1cedf52bd8d74c6f45e47fbb78/' + langtitude + ',' + longitude + '?units=si';
    const r = {
        url: url,
        json: true
    };


    request(r, (error, response) => {
        if (error) {
            callback('Cannot connect to weather service', undefined)
        } else if (response.body.error) {
            callback(response.body.error, undefined)
        } else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                chanceOfRain: response.body.currently.precipProbability
            });

        }

    });
};
module.exports = forecast;