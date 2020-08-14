const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

//addProject
router.post('/', (req,res) => {
    Projects.insert(req.body)
        .then(project => {
            console.log(project)
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Project could not be added' })
        });
})

//findProjects
router.get('/', (req, res) => {
    Projects.findProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' })
        });
})
module.exports = router;