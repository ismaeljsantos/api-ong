const CategoryModel = require("../../models/user/CategoryModel");

class CategoryRepository {
  async create(data) {
    return await CategoryModel.create(data);
  }

  async findAll({ limit = 10, offset = 0 }) {
    return await CategoryModel.findAll({
      limit,
      offset,
      attributes: ["id", "nome", "descricao"],
    });
  }

  async findById(id) {
    return await CategoryModel.findByPk(id, {
      attributes: ["id", "nome", "descricao"],
    });
  }

  async findOrCreate(data) {
    return await CategoryModel.findOrCreate({
      where: { nome: data.nome },
      defaults: { descricao: data.descricao },
    });
  }
  async findByName(nome) {
    return await CategoryModel.findOne({ where: { nome } });
  }

  async update(id, data) {
    const category = await CategoryModel.findByPk(id);
    if (!category) {
      throw new Error("Categoria não encontrada.");
    }
    const [updatedRows] = await CategoryModel.update(data, { where: { id } });
    return updatedRows; // Retorna apenas o número de registros atualizados
  }

  async delete(id) {
    return await CategoryModel.destroy({ where: { id } });
  }
}

module.exports = new CategoryRepository();
