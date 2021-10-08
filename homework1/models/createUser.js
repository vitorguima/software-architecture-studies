const connection = require('./mongoConnection');


const createCharacter = async (firstName, lastName, email, password) => {
  connection()
    .then((db) => db.collection('users-example')).insertOne({ firstName, lastName, email, password })
    .then((result) => { id: result.insertedId, firstName, lastName, email, password  });
}

module.exports = {
  createCharacter,
}
