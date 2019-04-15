const request = require('request');

const url = 'https://api.darksky.net/forecast/be210a1cedf52bd8d74c6f45e47fbb78/37.8267,-122.4233';

const r = {
    url: url,
    json: true
};

request(r, (error, response) => {
    console.log(response.body.currently);
});