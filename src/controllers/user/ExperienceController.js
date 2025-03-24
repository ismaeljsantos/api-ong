const experienceService = require("../../services/user/experienceService");

class ExperienceController {
  async create(req, res) {
    try {
      const data = req.body;
      const newExperience = await experienceService.create(data);
      res.status(201).json(newExperience);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async listByUser(req, res) {
    try {
      const { userId } = req.params;
      const experiences = await experienceService.getExperiencesByUserId(
        userId
      );
      res.status(200).json(experiences);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updatedExperience = await experienceService.update(id, data);
      res.status(200).json(updatedExperience);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await experienceService.delete(id);
      return res.status(204).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
module.exports = new ExperienceController();
