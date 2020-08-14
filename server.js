const express = require('express');

const projectRouter = require('./projects/project-router');

const resourceRouter = require('./resources/resource-router');

const taskRouter = require('./tasks/task-router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req,res) => {
    res.status(200).json({ message: 'API is up and running for Sprint Week 2!'});
});

module.exports = server;