const userService = require("../../services/user/userService");
const logger = require("../../utils/logger");

class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      logger.info(`Usuário Criado: ID=${user.id}`);
      return res.status(201).json(user);
    } catch (error) {
      logger.error(`Erro ao criar usuário: ${error.message}`);
      return res.status(400).json({ error: error.message });
    }
  }
  async getAllUser(req, res) {
    try {
      const users = await userService.getAllUser();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const { id } = req.params;
      // const user = await userService.getUserById(id);
      const user = await userService.getUserByIdWithCategories(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const userData = req.body;
      const user = await userService.updateUser(id, userData);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await userService.deleteUser(id);
      return res.status(204).json({ message: "User deleted successfully" });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
