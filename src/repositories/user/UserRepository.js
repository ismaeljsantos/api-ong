const { UserModel } = require("../../models/user/UserModel");
const { CategoryModel } = require("../../models/user/CategoryModel");

class UserRepository {
  async create(userData) {
    return await UserModel.create(userData);
  }

  async findById(id) {
    return await UserModel.findByPk(id);
  }

  async findByEmail(email) {
    return await UserModel.findOne({ where: { email } });
  }

  async findByWithCategories(id) {
    return await UserModel.findByPk(id, {
      include: [
        {
          model: CategoryModel,
          through: { attributes: [] },
        },
      ],
    });
  }
  async findAll() {
    return await UserModel.findAll();
  }

  async update(id, userData) {
    return await UserModel.update(userData, { where: { id } });
  }

  async delete(id) {
    return await UserModel.destroy({ where: { id } });
  }

  async findByCpfHash(cpfHash) {
    return await UserModel.findOne({ where: { cpfHash } });
  }
}

module.exports = new UserRepository();
