const categoryRepository = require("../../repositories/user/CategoryRepository");

class CategoryService {
  async create(data) {
    // Valida se a categoria já existe
    const existingCategory = await categoryRepository.findByName(data.nome);
    if (existingCategory) {
      throw new Error("Categoria já cadastrada!");
    }

    data.nome = data.nome.toUpperCase();
    // Cria a categoria
    return await categoryRepository.create(data);
  }

  async getAll() {
    return await categoryRepository.findAll();
  }

  async getById(id) {
    const category = await categoryRepository.findById(id);
    if (!category) {
      throw new Error("Categoria não encontrada.");
    }
    return category;
  }

  async update(id, data) {
    if (data.nome) {
      data.nome = data.nome.toUpperCase();
    }

    const updatedRows = await categoryRepository.update(id, data);
    if (updatedRows === 0) {
      throw new Error("Categoria não encontrada para atualização.");
    }

    return await categoryRepository.findById(id);
  }

  async delete(id) {
    const rowsDeleted = await categoryRepository.delete(id);
    if (rowsDeleted === 0) {
      throw new Error("Categoria não encontrada para exclusão.");
    }
  }
}

module.exports = new CategoryService();
