const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

//addProject
router.post('/', (req,res) => {
    const projectData = req.body;
    Projects.addProject(projectData)
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

//findProjectById
router.get('/:id', (req, res) => {
    Projects.findProjectById(req.params.id)
        .then(project => {
            console.log(project)
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Project could not be found' })
        });
});

module.exports = router;