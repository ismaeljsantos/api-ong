const PostRepository = require("../../repositories/blog/PostRepository");

class PostService {
  async create(post) {
    if (!post.titulo || !post.conteudo || !post.autorId) {
      throw new Error(
        "Os campos 'titulo', 'conteudo' e 'autorId' são obrigatórios."
      );
    }
    return await PostRepository.create(post);
  }

  async getAllPosts(filters = {}) {
    return await PostRepository.findAll(filters);
  }
  async getPostById() {
    if (!id) {
      throw new Error("O id do post é obrigatório.");
    }

    const post = await PostRepository.findById(id);
    if (!post) {
      throw new Error("Post não encontrado.");
    }
    return post;
  }

  async update(id, post) {
    if (!id) {
      throw new Error("O id do post é obrigatório.");
    }

    if (!post.titulo || (!post.conteudo && !post.imagemCapa)) {
      throw new Error("Nenhum campo para atualização foi fornecido.");
    }

    constupdatedPost = await PostRepository.update(id, post);
    if (!updatedPost) {
      throw new Error("Post não encontrado.");
    }
    return updatedPost;
  }

  async delete(id) {
    if (!id) {
      throw new Error("O id do post é obrigatório.");
    }
    const deletedRows = await PostRepository.delete(id);
    if (deletedRows === 0) {
      throw new Error("Post não encontrado.");
    }
    return { message: "Post deletado com sucesso." };
  }
}

module.exports = new PostService();
