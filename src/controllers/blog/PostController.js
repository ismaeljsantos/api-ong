const PostService = require("../../services/blog/postService");

class PostController {
  async create(req, res) {
    try {
      const post = req.body;
      const newPost = await PostService.create(post);
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {
      const filters = req.query;
      const posts = await PostService.getAllPosts(filters);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getPostById(id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const post = req.body;
      const updatedPost = await PostService.update(id, post);
      return res.status(200).json(updatedPost);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await PostService.delete(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new PostController();
