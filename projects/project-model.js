const db = require('../data/db-config');

module.exports = {
    addProject,
    findProjects,
    findProjectById,
    findTasksForProject
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

//use /api/projects/1/tasks
function findTasksForProject(id) {
    return db('tasks')
        .where({ project_id: id })
        .join('projects', 'projects.id', '=', 'tasks.project_id')
        .select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes')
        // .orderBy('tasks.id')
}