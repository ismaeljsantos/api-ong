const tagService = require("../../services/blog/tagService");

class TagController {
  async create(req, res) {
    try {
      const tagData = req.body;
      const newTag = await tagService.createTag(tagData);
      res.status(201).json(newTag);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async list(req, res) {
    try {
      const filter = req.query;
      const tags = await tagService.list(filter);
      res.status(200).json(tags);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const tag = await tagService.getTagById(id);
      res.status(200).json(tag);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const tagData = req.body;
      const updatedTag = await tagService.update(id, tagData);
      return res.status(200).json(updatedTag);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await tagService.delete(id);
      res.status(204).send(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new TagController();
