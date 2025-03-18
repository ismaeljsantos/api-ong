const { User } = require("../models");

class UserRepository {
  async create(userData) {
    return User.create(userData);
  }

  async findById(id) {
    return User.findById(id);
  }

  async findByEmail(email) {
    return User.findOne({ where: { email } });
  }

  async update(id, userData) {
    return User.update(id, userData);
  }

  async delete(id) {
    return User.destroy({ where: { id } });
  }
}

module.exports = new UserRepository();
