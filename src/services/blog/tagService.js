const TagRepository = require("../../repositories/blog/TagRepository");

class TagService {
  async createTag(tagData) {
    if (!tagData.nome) {
      throw new Error("O campo 'Nome' da tag é obrigatório!");
    }

    const existetag = await TagRepository.findByName(tagData.nome);
    if (existetag) {
      throw new Error("Tag já cadastrada!");
    }

    return await TagRepository.create(tagData);
  }
  async getAllTags(filters = {}) {
    return await TagRepository.findAll(filters);
  }
  async getTagById(id) {
    if (!id) {
      throw new Error("O campo 'ID' da tag é obrigatório!");
    }
    const tag = await TagRepository.findById(id);
    if (!tag) {
      throw new Error("Tag não encontrada!");
    }
    return tag;
  }
  async findOrCreateTag(nome) {
    if (!nome) {
      throw new Error("O campo 'Nome' da tag é obrigatório!");
    }
    return await TagRepository.findOrCreate({
      where: { nome },
      defaults: { nome },
    });
  }
  async updateTag(id, tagData) {
    if (!id) {
      throw new Error("O campo 'ID' da tag é obrigatório!");
    }
    if (!tagData.nome && !tagData.descricao) {
      throw new Error("Nenhum dado foi fornecido para atualização!");
    }
    const tag = await TagRepository.findById(id);
    if (!tag) {
      throw new Error("Nenhuma tag encontrada com o ID fornecido!");
    }

    const [rowsUpdated] = await TagRepository.update(id, tagData);
    if (rowsUpdated === 0) {
      throw new Error("Falha na atualização da tag!");
    }
    return { message: "Tag atualizada com sucesso!" };
  }
  async deleteTag(id) {
    if (!id) {
      throw new Error("O campo 'ID' da tag é obrigatório!");
    }
    const tag = await TagRepository.findById(id);
    if (!tag) {
      throw new Error("Nenhuma tag encontrada com o ID fornecido!");
    }

    const rowsDeleted = await TagRepository.delete(id);
    if (rowsDeleted === 0) {
      throw new Error("Falha na exclusão da tag!");
    }
    return { message: "Tag excluída com sucesso!" };
  }
}

module.exports = new TagService();
