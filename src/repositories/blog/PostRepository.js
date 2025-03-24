const PostModel = require("../../models/blog/PostModel");

class PostRepository {
  async create(post) {
    return await PostModel.create(post);
  }

  async findAll(filters = {}) {
    return await PostModel.findAll({
      where: filters,
      order: [["createdAt", "DESC"]],
    });
  }
  async findById(id) {
    return await PostModel.findByPk(id);
  }
  async update(id, post) {
    const [updatedRows] = await PostModel.update(post, {
      where: { id },
      returning: true,
    });

    if (updatedRows === 0) {
      throw new Error("Post not found");
    }
    return await this.findById(id);
  }

  async delete(id) {
    const post = await this.findById(id);
    if (!post) {
      throw new Error("Post not found");
    }
    await await post.destroy({ where: { id } });
  }
}

module.exports = new PostRepository();
