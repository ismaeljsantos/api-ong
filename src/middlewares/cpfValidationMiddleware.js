const { validationResult } = require("express-validator");
const validarCpf = require("../utils/cpfValidator");

const validarCpf = (req, res, next) => {
  const { cpf } = req.body;

  if (!validarCpf(cpf)) {
    return res.status(400).json({ error: "CPF inválido" });
  }

  next();
};

module.exports = validarCpf;
