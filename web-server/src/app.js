const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(__dirname);
// console.log(__filename);
const app = express();


//Define paths for Express config
const publicDirectoryName = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryName));

app.get('', (req, res) => {
    res.render('index', {
        title: 'My name',
        name: 'Shakhboz'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Shakhboz Tokhirov'
    })
});
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'How can I help you?',
        name: 'Shakhboz Tokhirov'
    })
});

app.get('/weather', (req, res) => {

    if (!req.query.address) {
       return res.send({
            error: 'You should use "address" term'
        })
    }

    geocode(req.query.address, (error, {latitude, longtitude, location}) => {
        if (error) {
            return res.send({
                error,
                service: 'geocode location'
            })
        }

        forecast(parseFloat(latitude), parseFloat(longtitude), (error, { forecast, temperature, chanceOfRain}) => {
            if (error) {
                return res.send({
                    error,
                    service: 'forecast'
                })
            }
            res.send({
                location,
                forecast,
                temperature,
                chanceOfRain
            })
        })
    });


});

app.get('/products', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You should provide a search term'
        })
    }

    console.log(req.query);


   res.send({
       products: []
   })
});

app.get('/help/*', (req, res) => {
   res.render('404', {
       title: 'Help article not found',
       name: 'Shakhboz'
   })
});

app.get('*', (req, res) => {
   res.render('404', {
       title: 'Page Not Found!',
       name: 'Shakhboz Tokhirov'
   })
});

app.listen(4000, () => {
    console.log('Server is up on port 4000.')
});