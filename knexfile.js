const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'nakajiarisa',
    password: '',
    database: 'sake'
  }
});

module.exports = { knex };