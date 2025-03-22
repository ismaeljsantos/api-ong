const crypto = require("crypto");

const palavraSecreta = process.env.ENCRYPTION_SALT;

function gerarHashCpf(cpf) {
  return crypto
    .createHash("sha256")
    .update(cpf + palavraSecreta)
    .digest("hex");
}

module.exports = { gerarHashCpf };
