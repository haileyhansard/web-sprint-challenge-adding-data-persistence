const db = require('../data/db-config');

module.exports = {
    addResource,
    findResources,
    findResourceById
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .returning('id')
        .then(ids => {
            const id = ids[0]
            return findResourceById(id)
        });
}

function findResources() {
    return db('resources');
}

function findResourceById(id) {
    return db('resources')
        .where({ id })
        .first()
}