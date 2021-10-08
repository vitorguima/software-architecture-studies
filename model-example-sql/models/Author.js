const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, last_name FROM  authors');

  return authors;
}

module.exports = {
  getAll,
}
