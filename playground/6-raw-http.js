const https = require('https');
const url = 'https://api.darksky.net/forecast/be210a1cedf52bd8d74c6f45e47fbb78/40,-75?units=si';

const request = https.request(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    });

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })

});

request.on('error', (error) => {
   console.log(error)
});

request.end();