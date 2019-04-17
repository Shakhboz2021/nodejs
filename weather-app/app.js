const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const addr = process.argv[2];// accessing command line elements
if (!addr) {
    console.log('Please, enter address!')
} else {
    geocode(addr, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            forecast(data.latitude, data.longitude, (error, dataForecast) => {// callback chaining
                if (error) {
                    console.log(error);
                } else {
                    console.log('It is currently ' + dataForecast.temperature + ' Celsius in ' + data.location);
                    console.log('There is a ' + dataForecast.chanceOfRain + ' chance of rain in ' + data.location);
                }

            });
        }
    });
}



