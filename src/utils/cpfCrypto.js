const crypto = require("crypto");

const chaveSecreta = process.env.ENCRYPTION_KEY;

// Valida a chave secreta
if (!chaveSecreta || chaveSecreta.length !== 32) {
  throw new Error("A chave ENCRYPTION_KEY deve ter exatamente 32 caracteres.");
}

/**
 * Criptografa o CPF utilizando AES-256-CBC
 * @param {string} cpf - CPF a ser criptografado
 * @returns {string} CPF criptografado no formato "iv:ciphertext"
 */
function criptografarCpf(cpf) {
  const iv = crypto.randomBytes(16); // Gera um vetor de inicialização aleatório
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(chaveSecreta),
    iv
  );

  let encrypted = cipher.update(cpf, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return `${iv.toString("hex")}:${encrypted}`; // Retorna IV + texto criptografado
}

/**
 * Descriptografa o CPF utilizando AES-256-CBC
 * @param {string} encryptedCpf - CPF criptografado no formato "iv:ciphertext"
 * @returns {string} CPF descriptografado
 */
function descriptografarCpf(encryptedCpf) {
  const [iv, encrypted] = encryptedCpf.split(":"); // Separa o IV do texto criptografado
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(chaveSecreta),
    Buffer.from(iv, "hex") // Usa o IV correto
  );

  let decrypted = decipher.update(encrypted, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
}

module.exports = { criptografarCpf, descriptografarCpf };
