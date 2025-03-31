const TagModel = require("../../models/blog/TagModel");

class TagRepository {
  async create(tagData) {
    return await TagModel.create(tagData);
  }

  async findAll(filters = {}) {
    return await TagModel.findAll({
      where: filters,
      order: [["nome", "ASC"]],
    });
  }

  async findById(id) {
    return await TagModel.findByPk(id);
  }

  async findByName(nome) {
    return await TagModel.findOne({
      where: { nome },
    });
  }
  async findOrCreate(filter) {
    return await TagModel.findOrCreate(filter);
  }
  async update(id, tagData) {
    return await TagModel.update(tagData, {
      where: { id },
    });
  }
  async delete(id) {
    return await TagModel.destroy({
      where: { id },
    });
  }
}

module.exports = new TagRepository();
