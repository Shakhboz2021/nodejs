const path = require('path');
const express = require('express');
const hbs = require('hbs');

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

app.listen(4000, () => {
    console.log('Server is up on port 4000.')
});