const { Address } = require("../models");

class AddressRepository {
  async create(addressData) {
    return await Address.create(addressData);
  }
  async findById(id) {
    return await Address.findByPk(id);
  }
  async findByUserId(userId) {
    return await Address.findAll({ where: { userId } });
  }
  async update(id, addressData) {
    return await Address.update(addressData, { where: { id: id } });
  }
  async delete(id) {
    return await Address.destroy({ where: { id: id } });
  }
}

module.exports = new AddressRepository();
