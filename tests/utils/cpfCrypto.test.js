require("dotenv").config(); // Carrega variáveis do .env
const {
  criptografarCpf,
  descriptografarCpf,
} = require("../../src/utils/cpfCrypto");

const cpfOriginal = "12345678909";

// Criptografar CPF
const cpfCriptografado = criptografarCpf(cpfOriginal);
console.log("CPF Original:", cpfOriginal);
console.log("CPF Criptografado:", cpfCriptografado);

// Descriptografar CPF
const cpfDescriptografado = descriptografarCpf(cpfCriptografado);
console.log("CPF Descriptografado:", cpfDescriptografado);

// Verificação
if (cpfOriginal === cpfDescriptografado) {
  console.log(
    "Sucesso! O CPF foi criptografado e descriptografado corretamente."
  );
} else {
  console.error("Erro! O CPF original e o descriptografado não coincidem.");
}
