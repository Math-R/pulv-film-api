require('dotenv').config()

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST + ':' + process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_PATH,
    }
})

module.exports = knex


