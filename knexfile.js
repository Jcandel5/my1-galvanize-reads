module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/Data_Jared'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
