
const router = require('express').Router();

const { validatePassword, validateFields } = require('../middleware/userValidations');
const { createUser, getUsers, getUser, updateUser } = require('../models/user');

router.post('/',
  validatePassword,
  validateFields,
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password
      } = req.body;

      const data = await createUser(firstName, lastName, email, password);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Problema ao inserir o registro' });
    }
  }
)

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = await getUser(id);
    return res.status(200).json(data);
  } catch (_err) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
  }
})

router.get('/', async (_req, res) => {
  try {
    const data = await getUsers();
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Problema ao conectar com o servidor' });
  }
})

router.put('/:id',
  validatePassword,
  validateFields,
  async (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;
    const { id } = req.params;
    try {
      const data = await updateUser(id, firstName, lastName, email, password);
      return res.status(200).json(data);
    } catch (_err) {
      return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
    }
  } 
)

module.exports = router;
