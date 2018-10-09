
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', (books) => {
    books.increments('id'),
    books.string('title'),
    books.string('genre'),
    books.string('description', 1000),
    books.string('coverURL')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books')
};
