
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors_books', (authors_books) => {
            authors_books.integer('authors_id').unsigned()
            authors_books.foreign('authors_id').references('authors.id')
            authors_books.integer('books_id').unsigned()
            authors_books.foreign('books_id').references('books.id')      
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors_books')
};
