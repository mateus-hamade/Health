const pg = require('pg');

const config = {
    host: 'localhost',
    port: 5432,
    database: 'Hospital',
    user: 'postgres',
    password: ''
}

const pool = new pg.Pool(config)

module.exports = pool;