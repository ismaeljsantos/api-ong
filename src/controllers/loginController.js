const loginService = require("../services/loginService");

class LoginController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const result = await loginService.login(email, senha);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new LoginController();
