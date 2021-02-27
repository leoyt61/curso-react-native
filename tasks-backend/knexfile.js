// Update with your config settings

module.exports = {
    client: 'postgresql',
    connection: {
        database: 'tasks',
        user: 'postgres',
        password: 'cllfpp61'
    },
    pool: {
        min: 2,
        max: 10
    },
    migration: {
        tableName: 'knex_migrations'
    }
}