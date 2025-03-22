const express = require("express");
const categoryController = require("../controllers/categoryController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: ID único da categoria.
 *         nome:
 *           type: string
 *           description: Nome da categoria.
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação da categoria.
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização da categoria.
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gerenciamento de categorias
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Retorna todas as categorias
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lista de categorias cadastradas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Erro interno do servidor.
 */
router.get("/", categoryController.getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Retorna uma categoria pelo ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID único da categoria.
 *     responses:
 *       200:
 *         description: Dados da categoria.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Categoria não encontrada.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get("/:id", categoryController.getCategoryById);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *           example:
 *             nome: "Material Escolar"
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Requisição inválida.
 *       500:
 *         description: Erro interno do servidor.
 */
router.post("/", categoryController.createCategory);

/**
 * @swagger
 * /categories/{id}:
 *   patch:
 *     summary: Atualiza uma categoria pelo ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID único da categoria.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *           example:
 *             nome: "Tecnologia"
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       400:
 *         description: Requisição inválida.
 *       404:
 *         description: Categoria não encontrada.
 *       500:
 *         description: Erro interno do servidor.
 */
router.patch("/:id", categoryController.updateCategory);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Exclui uma categoria pelo ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID único da categoria.
 *     responses:
 *       204:
 *         description: Categoria excluída com sucesso.
 *       404:
 *         description: Categoria não encontrada.
 *       500:
 *         description: Erro interno do servidor.
 */
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
