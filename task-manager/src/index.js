// this file for express server
const express = require('express');
require('./db/mongoose'); // connect to the database from mongoose.js
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 4000;// In order to deploy heroku.com

app.use(express.json()); // It is going to automatically pass incoming JSON to an Object
app.use(userRouter); // CRUD operations for User
app.use(taskRouter); // CRUD operations for Task
app.listen(port, () => { // starting server
    console.log('Server is up on port ' + port)
});