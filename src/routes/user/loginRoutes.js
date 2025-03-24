const express = require("express");
const loginController = require("../../controllers/user/loginController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           description: O e-mail do usuário.
 *           example: maria.oliveira@example.com
 *         senha:
 *           type: string
 *           description: A senha do usuário.
 *           example: senhaForte123
 *     LoginResponse:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           description: O token JWT gerado para autenticação.
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *         message:
 *           type: string
 *           description: Mensagem de confirmação do login.
 *           example: Login realizado com sucesso!
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: "Login realizado com sucesso."
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: "Erro durante o login (ex.: e-mail ou senha inválidos)."
 */
router.post("/", loginController.login);

module.exports = router;
