const connection = require('./mongoConnection');
const { ObjectId } = require('mongodb');

const createUser = async (firstName, lastName, email, password) => {
  return await connection()
    .then((db) => db.collection('usersexample').insertOne({ firstName, lastName, email, password }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email, password  }));
}

const getUsers = async () => {
  return await connection()
    .then((db) => db.collection('usersexample').find().toArray());
}

const getUser = async (id) => {
  return await connection()
    .then((db) => db.collection('usersexample').findOne(ObjectId(id)));
};

const updateUser = async (id, firstName, lastName, email, password) => {
  return await connection()
    .then((db) => {
      const userId = new ObjectId(id);
      const newData = { firstName, lastName, email, password };

      return db.collection('usersexample')
        .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false })
        .then((result) => result.value);
    })
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
}
