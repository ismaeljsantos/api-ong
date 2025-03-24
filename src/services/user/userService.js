const bcrypt = require("bcrypt");
const userRepository = require("../../repositories/user/UserRepository");
const validarCpf = require("../../utils/cpfValidator");
const {
  criptografarCpf,
  descriptografarCpf,
} = require("../../utils/cpfCrypto");
const { gerarHashCpf } = require("../../utils/cpfHash");

class UserService {
  async createUser(userData) {
    const { cpf, email, senha } = userData;

    // Valida o formato do CPF
    if (!validarCpf(cpf)) {
      throw new Error("O CPF fornecido é inválido.");
    }

    // Verifica duplicidade do CPF
    const cpfHash = gerarHashCpf(cpf);
    const existingCpf = await userRepository.findByCpfHash(cpfHash);
    if (existingCpf) {
      throw new Error("Este CPF já foi cadastrado!");
    }

    // Verifica duplicidade do e-mail
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("Este e-mail já está em uso!");
    }

    // Criptografa a senha antes de salvar
    const salt = await bcrypt.genSalt(10);
    userData.senha = await bcrypt.hash(senha, salt);

    // Criptografa o CPF e salva o hash para validação
    userData.cpf = criptografarCpf(cpf);
    userData.cpfHash = cpfHash;

    // Salva o usuário no banco de dados
    return userRepository.create(userData);
  }

  async getUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("Nenhum usuário encontrado com o ID fornecido.");
    }
    return user;
  }

  async updateUser(id, userData) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("Nenhum usuário encontrado com o ID fornecido.");
    }
    const [rowsUpdated] = await userRepository.update(id, userData);
    if (rowsUpdated === 0) {
      throw new Error("Nenhum usuário encontrado com o ID fornecido.");
    }
    return { message: "qUsuário atualizado com sucesso!" };
  }

  async deleteUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("Nenhum usuário encontrado com o ID fornecido.");
    }
    return userRepository.delete(id);
  }

  async getAllUser() {
    return await userRepository.findAll();
  }
}

module.exports = new UserService();
