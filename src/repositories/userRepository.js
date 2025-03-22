const { User } = require("../models");

class UserRepository {
  async create(userData) {
    return await User.create(userData);
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }
  async findAll() {
    return await User.findAll();
  }

  async update(id, userData) {
    return await User.update(userData, { where: { id } });
  }

  async delete(id) {
    return await User.destroy({ where: { id } });
  }

  async findByCpfHash(cpfHash) {
    return await User.findOne({ where: { cpfHash } });
  }
}

module.exports = new UserRepository();
