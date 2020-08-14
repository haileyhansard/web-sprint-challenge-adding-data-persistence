const db = require('../data/db-config');

module.exports = {
    addProject,
    findProjects,
    findProjectById
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .returning('id')
        .then(ids => {
            const id = ids[0]
            return findProjectById(id);
        });
}

function findProjects() {
    return db('projects');
}

function findProjectById(id) {
    return db('projects')
        .where({ id })
        .first()
}