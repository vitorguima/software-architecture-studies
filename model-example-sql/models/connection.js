const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'vitor',
  password: '25373535',
  host: 'localhost',
  database: 'model_example'
});

module.exports  = connection;
