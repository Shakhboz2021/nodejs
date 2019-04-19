const request = require('request');

const forecast = (langtitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/be210a1cedf52bd8d74c6f45e47fbb78/' + langtitude + ',' + longitude + '?units=si';
    const r = {
        url, // es6 object property shorthand used here
        json: true
    };


    request(r, (error, { body } = {}) => {
        if (error) {
            callback('Cannot connect to weather service', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, {
                temperature: body.currently.temperature,
                chanceOfRain: body.currently.precipProbability,
                forecast: body.daily.summary

            });

        }

    });
};
module.exports = forecast;