const ExperienceRepository = require("../../repositories/user/ExperienceReporitory");

class ExperienceService {
  async createExperience(data) {
    if (!data.nomeEmpresa || !data.atividade) {
      throw new Error(
        "Os campos 'nome da empresa' e 'função' são obrigatórios."
      );
    }
    return await ExperienceRepository.create(data);
  }
  async getExperiencesByUserId(userId) {
    if (!userId) {
      throw new Error("O ID do usuário é obrigatório.");
    }
    return await ExperienceRepository.findByUserId(userId);
  }
  async updateExperience(id, data) {
    if (!id) {
      throw new Error("O ID da experiência é obrigatório.");
    }
    if (
      !data.nomeEmpresa ||
      (!data.atividade &&
        !data.dataInicio &&
        !data.dataFim &&
        !data.descricaoAtividade)
    ) {
      throw new Error(
        "Os campos 'nome da empresa' e 'função' são obrigatórios."
      );
    }
    const updatedExperience = await ExperienceRepository.update(id, data);
    if (!updatedExperience) {
      throw new Error("Experiência não encontrada para atualização.");
    }

    return updatedExperience;
  }
  async deleteExperience(id) {
    if (!id) {
      throw new Error("O ID da experiência é obrigatório.");
    }
    const deletedRows = await ExperienceRepository.delete(id);
    if (!deletedRows) {
      throw new Error("Experiência não encontrada para exclusão.");
    }
    return await ExperienceRepository.delete(id);
  }
}

module.exports = new ExperienceService();
