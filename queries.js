const connection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(connection)


function listAllData() {
    return knex('authors_books').innerJoin('authors', 'authors_books.authors_id', 'authors.id').innerJoin('books', 'authors_books.books_id', 'books.id')
}

module.exports = {
    listAllData
}