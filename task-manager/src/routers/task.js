const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/tasks', async (req, res) => {
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
router.get('/tasks', async (req, res) => {

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
router.get('/tasks/:id', async (req, res) => {

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
router.patch('/tasks/:id', async (req, res) => {

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
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            res.status(404).send({
                error: 'Task not found!'
            })
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e.message)
    }
});

module.exports = router;