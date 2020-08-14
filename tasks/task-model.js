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
        .select('tasks.*')
        .join('projects', 'projects.id', 'tasks.project_id')
}

//findTaskById
function findTaskById(id) {
    return db('tasks')
        .where({ id })
        .first()
}