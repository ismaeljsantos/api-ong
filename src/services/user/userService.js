const bcrypt = require("bcrypt");
const userRepository = require("../../repositories/user/UserRepository");
const validarCpf = require("../../utils/cpfValidator");
const { criptografarCpf } = require("../../utils/cpfCrypto");
const { gerarHashCpf } = require("../../utils/cpfHash");
const ValidationError = require("../../errors/ValidationsError");
const NotFoundError = require("../../errors/NotFoundError");
const CategoryService = require("./categoryService");

class UserService {
  async createUser(userData) {
    const { cpf, email, senha } = userData;

    // Valida o formato do CPF
    if (!validarCpf(cpf)) {
      throw new ValidationError("O CPF fornecido é inválido.");
    }

    // Verifica duplicidade do CPF
    const cpfHash = gerarHashCpf(cpf);
    const existingCpf = await userRepository.findByCpfHash(cpfHash);
    if (existingCpf) {
      throw new ValidationError("Este CPF já foi cadastrado!");
    }

    // Verifica duplicidade do e-mail
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new ValidationError("Este e-mail já está em uso!");
    }

    // Criptografa a senha antes de salvar
    const salt = await bcrypt.genSalt(10);
    userData.senha = await bcrypt.hash(senha, salt);

    // Processa e atribui CPF
    userData.cpf = criptografarCpf(cpf);
    userData.cpfHash = cpfHash;

    const user = await userRepository.create(userData);
    const defaultCategory = await CategoryService.findOrCreateCategory(
      "default"
    );
    await user.addCategory(defaultCategory);
    // Salva o usuário no banco de dados
    return user;
  }
  async getUserByIdWithCategories(id) {
    if (!id) {
      throw new Error("O ID do usuário é obrigatório");
    }

    const user = await userRepository.findByWithCategories(id);
    if (!user) {
      throw new NotFoundError("Usuário não encontrado");
    }
    return user;
  }
  async getUserById(id) {
    const user = await userRepository.findById(id, {
      attributes: { exclude: ["senha", "cpf", "cpfHash"] },
    });
    if (!user) {
      throw new NotFoundError("Nenhum usuário encontrado com o ID fornecido.");
    }
    return user;
  }

  async updateUser(id, userData) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new NotFoundError("Nenhum usuário encontrado com o ID fornecido.");
    }
    const [rowsUpdated] = await userRepository.update(id, userData);
    if (rowsUpdated === 0) {
      throw new NotFoundError("Nenhum usuário encontrado com o ID fornecido.");
    }
    return { message: "Usuário atualizado com sucesso!" };
  }

  async deleteUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new NotFoundError("Nenhum usuário encontrado com o ID fornecido.");
    }
    return userRepository.delete(id);
  }

  async getAllUser() {
    return await userRepository.findAll({
      attributes: { exclude: ["senha", "cpf", "cpfHash"] },
    });
  }
}

module.exports = new UserService();
