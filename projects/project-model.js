const db = require('../data/db-config');

module.exports = {
    addProject,
    findProjects,
    findProjectsById
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .returning('id')
        .then(ids => {
            const id = ids[0]
            return findById(id);
        });
}

function findProjects() {
    return db('projects');
}

function findProjectsById(id) {
    return db('projects')
        .where({ id })
        .first()
}