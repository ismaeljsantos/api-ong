const express = require("express");
const TagController = require("../../controllers/blog/TagController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tags
 *   description: Gerenciamento de tags
 */

/**
 * @swagger
 * /tags:
 *   post:
 *     summary: Cria uma nova tag
 *     tags: [Tags]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da tag
 *               descricao:
 *                 type: string
 *                 description: Descrição da tag (opcional)
 *     responses:
 *       201:
 *         description: Tag criada com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post("/", TagController.create);

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Lista todas as tags
 *     tags: [Tags]
 *     parameters:
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *         description: Filtro opcional pelo nome da tag
 *     responses:
 *       200:
 *         description: Lista de tags retornada com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.get("/", TagController.list);

/**
 * @swagger
 * /tags/{id}:
 *   get:
 *     summary: Busca uma tag pelo ID
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tag
 *     responses:
 *       200:
 *         description: Tag retornada com sucesso
 *       404:
 *         description: Tag não encontrada
 */
router.get("/:id", TagController.getById);

/**
 * @swagger
 * /tags/{id}:
 *   patch:
 *     summary: Atualiza uma tag pelo ID
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome atualizado da tag
 *               descricao:
 *                 type: string
 *                 description: Descrição atualizada da tag (opcional)
 *     responses:
 *       200:
 *         description: Tag atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Tag não encontrada
 */
router.patch("/:id", TagController.update);

/**
 * @swagger
 * /tags/{id}:
 *   delete:
 *     summary: Exclui uma tag pelo ID
 *     tags: [Tags]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tag
 *     responses:
 *       200:
 *         description: Tag excluída com sucesso
 *       404:
 *         description: Tag não encontrada
 */
router.delete("/:id", TagController.delete);

module.exports = router;
