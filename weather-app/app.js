const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');



geocode('Tashkent', (error, data) => {
    if (error !== undefined)  {
        console.log(error);
    } else {
        forecast(data.latitude, data.longitude, (error, dataForecast) => {
            if (error !== undefined) {
                console.log(error);
            } else {
                console.log('It is currently ' + dataForecast.temperature +' Celsius in ' + data.location);
                console.log('There is a ' + dataForecast.chanceOfRain +' chance of rain in ' + data.location);
            }

        });
    }
});

