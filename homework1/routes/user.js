
const router = require('express').Router();

const { validatePassword, validateFields } = require('../middleware/userValidations');
const { createCharacter } = require('../models/createUser');

router.post('/',
  validatePassword,
  validateFields,
  (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    try {
      const {
        firstName,
        lastName,
        email,
        password
      } = req.body;

      const data = await createCharacter(firstName, lastName, email, password);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Problema ao inserir o registro' });
    }
  }
)

module.exports = router;
