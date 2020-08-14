const express = require('express');

const Resources = require('./resource-model');

const router = express.Router();

//remember this API call is to /api/resources
//addResource
router.post('/', (req, res) => {
    const resourceData = req.body;
    Resources.addResource(resourceData)
        .then(resource => {
            console.log(resource)
            res.status(201).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Resource could not be added' })
        });
});

router.get('/', (req, res) => {
    Resources.findResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get resources' })
        });
});

router.get('/:id', (req, res) => {
    Resources.findResourceById(req.params.id)
        .then(resource => {
            console.log(resource)
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get resource by id' })
        });
});

module.exports = router;