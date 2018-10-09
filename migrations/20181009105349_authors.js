exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', (authors) => {
    authors.increments('id')
    authors.string('first'),
    authors.string('last'),
    authors.string('biography', 1000),
    authors.string('portraitURL')
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors')
};
