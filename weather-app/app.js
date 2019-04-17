const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const addr = process.argv[2];// accessing command line elements
if (!addr) {
    console.log('Please, enter address!')
} else {
    geocode(addr, (error, { latitude, longtitude, location }) => {
        if (error) {
            console.log(error);
        } else {
            forecast(latitude, longtitude, (error, { temperature, chanceOfRain }) => {// callback chaining
                if (error) {
                    console.log(error);
                } else {
                    console.log('It is currently ' + temperature + ' Celsius in ' + location);
                    console.log('There is a ' + chanceOfRain + ' chance of rain in ' + location);
                }

            });
        }
    });
}



