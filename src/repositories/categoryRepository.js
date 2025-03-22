const Category = require("../models/CategoryModel");

class CategoryRepository {
  async create(data) {
    return await Category.create(data);
  }

  async findAll() {
    return await Category.findAll();
  }

  async findById(id) {
    return await Category.findByPk(id);
  }

  async findByName(nome) {
    return await Category.findOne({ where: { nome } });
  }

  async update(id, data) {
    const [updatedRows] = await Category.update(data, { where: { id } });
    return updatedRows; // Retorna apenas o número de registros atualizados
  }

  async delete(id) {
    return await Category.destroy({ where: { id } });
  }
}

module.exports = new CategoryRepository();
