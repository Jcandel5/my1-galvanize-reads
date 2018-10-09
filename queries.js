const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)


function listAllData() {
    return knex('authors_books')
}
module.exports = {
    listAllData
}