// this file for express server
const express = require('express');
require('./db/mongoose'); // connect to the database from mongoose.js
const User = require('./models/user');
const Task = require('./models/task');


const app = express();
const port = process.env.PORT || 4000;// In order to deploy heroku.com

app.use(express.json()); // It is going to automatically pass incoming JSON to an Object

app.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e.message)
    }
    /* user.save().then(() => {
         res.status(201).send(user)
     }).catch((error) => {
         res.status(400).send(error.message);
     });*/
});
app.get('/users', async (req, res) => {

    try {
        const users = await User.find();
        res.send(users)
    } catch (e) {
        res.status(500).send(e.message)
    }

    /* User.find({}).then((users) => {
         res.send(users)
     }).catch((error) => {
         res.status(500);
         res.send(error.message)
     })*/
});

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;


    try {
        const user = await User.findById(_id);
        if (!user) {
            res.status(400).send()
        }
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    /* User.findById(_id).then((user) => {
         if (!user) {
             return res.status(404).send()
         }
         res.status(302).send(user)
     }).catch((error) => {
         res.status(500).send(error.message)
     })*/
});

// Updating data in database

app.patch('/users/:id', async (req, res) => {
    try {
        const updates = Object.keys(req.body);
        console.log(updates);
        const allowedUpdates = ['name', 'email', 'password', 'age'];
        const isValidOperation = updates.every(update => allowedUpdates.includes(update));

        if (!isValidOperation) {
            return res.status(400).send({
                error: 'Invalid updates!'
            })
        }


        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)

    } catch (e) {
        res.status(404).send(e.message)
    }
});

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e.message)
    }
    /* task.save().then(() => {
         res.status(201).send(task)
     }).catch((error) => {
         res.status(400);
         res.send(error.message)
     })*/
});
app.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find();
        res.send(tasks)
    } catch (e) {
        res.status(400).send(e.message)
    }

    /*Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((error) => {
        res.status(500);
        res.send(error.message)
    })*/
});
app.get('/tasks/:id', async (req, res) => {

    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e.message)
    }
    /* Task.findById(_id).then((task) => {
         if (!task) {
             return res.status(404).send()
         }
         res.send(task)
     }).catch((error) => {
         res.send(error.message)
     })*/
});
app.patch('/tasks/:id', async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({
            error: 'Invalid update!'
        })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})

        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e.message)
    }
});

app.listen(port, () => {// starting server
    console.log('Server is up on port ' + port)
});