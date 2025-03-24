const userService = require("../../services/user/userService");

class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      return res.status(201).json(user);
    } catch (error) {
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
      const user = await userService.getUserById(id);
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
