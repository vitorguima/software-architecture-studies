const validatePassword = (req, res, next) => {
  if (!req.body.password) {
    return res.status(401).json({ error: true, message: 'o campo "password" é obrigatório' });
  }

  const { password } = req.body;

  if (password.length < 6) {
    return res.status(401).json({ error: true, message: 'o campo "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

const validateFields = (req, res, next) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email) {
    return res.status(401).json({ error: true, message: 'todos os campos são obrigatórios' });
  }

  next();
}

module.exports = {
  validatePassword,
  validateFields,
};
