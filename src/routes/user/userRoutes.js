const express = require("express");
//const validarCpf = require("../middlewares/cpfValidationMiddleware");
const userController = require("../../controllers/user/userController");

const router = express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nome
 *         - sobrenome
 *         - dataNascimento
 *         - cpf
 *         - email
 *         - senha
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: ID único do usuário
 *         nome:
 *           type: string
 *           description: Nome do usuário
 *         sobrenome:
 *           type: string
 *           description: Sobrenome do usuário
 *         dataNascimento:
 *           type: string
 *           format: date
 *           description: Data de nascimento do usuário
 *         cpf:
 *           type: string
 *           description: CPF do usuário
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/", userController.createUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID único do usuário
 *     responses:
 *       200:
 *         description: Detalhes do usuário
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Usuário não encontrado
 */
router.get("/:id", userController.getUserById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualiza os dados de um usuário
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID único do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 */
router.put("/:id", userController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove um usuário pelo ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID único do usuário
 *     responses:
 *       204:
 *         description: Usuário removido com sucesso
 */
router.delete("/:id", userController.deleteUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Busca todos os usuários cadastrados
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Lista de todos os usuários cadastrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/", userController.getAllUser);

module.exports = router;
