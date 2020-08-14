const express = require('express');

const Tasks = require('./task-model');

const router = express.Router();

//addTask
router.post('/', (req, res) => {
    const taskData = req.body;
    Tasks.addTask(taskData)
        .then(task => {
            console.log(task)
            res.status(201).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Task could not be added' })
        });
});

//findTask
router.get('/', (req, res) => {
    Tasks.findTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get task list'})
        })
})

//findTaskById
router.get('/:id', (req, res) => {
    Tasks.findTaskById(req.params.id)
        .then(task => {
            console.log(task)
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Task could not be found" })
        });
});

module.exports = router;