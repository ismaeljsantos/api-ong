const userRepository = require("../services/userService");

class UserService {
  async createUser(userData) {
    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("Este email Não pode ser usado!");
    }
    return userRepository.create(userData);
  }

  async getUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  }

  async updateUser(id, userData) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return userRepository.update(id, userData);
  }

  async deleteUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return userRepository.delete(id);
  }
}

module.exports = new UserService();
