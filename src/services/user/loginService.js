const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserRepository = require("../../repositories/user/UserRepository");
const { descriptografarCpf } = require("../../utils/cpfCrypto");

const secretKey = process.env.ENCRYPTION_KEY;

class LoginService {
  async login(email, senha) {
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      throw new Error("E-mail ou Senha inválidos");
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      throw new Error("E-mail ou Senha inválidos");
    }

    const cpfOriginal = descriptografarCpf(user.cpf);

    const token = jwt.sign(
      { id: user.id, email: user.email, cpf: cpfOriginal },
      secretKey,
      {
        expiresIn: "5h",
      }
    );
    return { token, message: "Login realizado com sucesso" };
  }
}

module.exports = new LoginService();
