const ExperienceModel = require("../../models/user/ExperienceModel");

class ExperienceRepository {
  async create(data) {
    return await ExperienceModel.create(data);
  }
  async findByUserId(userId) {
    return await ExperienceModel.findAll({
      where: { userId },
      order: [["dataInicio", "DESC"]],
    });
  }
  async findById(id) {
    return await Experience.findByPk(id);
  }

  async update(id, data) {
    const [updatedRows] = await Experience.update(data, {
      where: { id },
      returning: true,
    });

    if (!updatedRows) {
      return null;
    }
    return await this.findById(id); // Retorna apenas o número de registros atualizados
  }
  async delete(id) {
    return await Experience.destroy({ where: { id } });
  }
}

module.exports = new ExperienceRepository();
