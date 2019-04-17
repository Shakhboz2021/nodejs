const path = require('path')
const express = require('express');

console.log(__dirname);
console.log(__filename);
const app = express();

const publicDirectoryName = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryName));

// app.get('', (req, res) => {
//    res.send('<h1>Hello, it is my first server ever!</h1>')
// });

app.get('/weather', (req, res) => {
   res.send({
      forecast: 'rainy',
      location: 'Tashkent'
   })
});

app.listen(4000, () => {
   console.log('Server is up on port 4000.')
});