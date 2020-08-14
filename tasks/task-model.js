const db = require('../data/db-config');

module.exports = {
    addTask,
    findTasks,
    findTaskById
}


//addTask
function addTask(task) {
    return db('tasks')
        .insert(task)
        .returning('id')
        .then(ids => {
            const id = ids[0]
            return findTaskById(id);
        });
}

//findTasks
function findTasks() {
    return db('tasks')
    .join('projects', 'projects.id', '=', 'tasks.project_id')
    .select('projects.name', 'projects.id', 'projects.description', 'tasks.description')
}

//findTaskById
function findTaskById(id) {
    return db('tasks')
        .where({ id })
        .first()
}