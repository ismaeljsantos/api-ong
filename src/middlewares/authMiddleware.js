const jwt = require("jsonwebtoken");
const secretKey = process.env.ENCRYPTION_KEY;

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ error: "Acesso negado. Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "token inválido ou expirado" });
  }
}

module.exports = authMiddleware;
