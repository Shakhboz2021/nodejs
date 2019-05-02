// this file for express server
const express = require('express');
require('./db/mongoose'); // connect to the database from mongoose.js
const User = require('./models/user');




const app = express();
const port = process.env.PORT || 4000;// In order to deploy heroku.com

app.use(express.json()); // It is going to automatically pass incoming JSON to an Object

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        res.status(400).send(error.message);
    });
});

app.listen(port, () => {// starting server
    console.log('Server is up on port ' + port)
});