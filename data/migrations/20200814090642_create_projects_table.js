
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('name', 256).notNullable().unique();
        tbl.text('description');
        tbl.boolean('completed').defaultTo(false).notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments('id');
        tbl.string('description', 256).notNullable();
        tbl.text('notes');
        tbl.boolean('completed').defaultTo(false).notNullable();
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('resources', tbl => {
        tbl.increments('id');
        tbl.string('name', 256).notNullable().unique();
        tbl.text('description');
    })
    .createTable('project_resources', tbl => {
        tbl.increments('id');
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
