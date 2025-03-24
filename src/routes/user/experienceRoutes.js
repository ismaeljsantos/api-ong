const express = require("express");
const ExperienceController = require("../../controllers/user/ExperienceController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Experiences
 *   description: Gerenciamento de experiências dos usuários
 */

/**
 * @swagger
 * /experiences:
 *   post:
 *     summary: Cria uma nova experiência para o usuário
 *     tags: [Experiences]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 description: ID do usuário relacionado à experiência
 *               companyName:
 *                 type: string
 *                 description: Nome da empresa
 *                 example: "Tech Corp"
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Data de início
 *                 example: "2022-01-01"
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: Data de término
 *                 example: "2023-01-01"
 *               role:
 *                 type: string
 *                 description: Função desempenhada
 *                 example: "Desenvolvedor"
 *               activityDescription:
 *                 type: string
 *                 description: Descrição das atividades realizadas
 *                 example: "Desenvolvimento de aplicações web."
 *     responses:
 *       201:
 *         description: Experiência criada com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.post("/", ExperienceController.create);

/**
 * @swagger
 * /experiences/{userId}:
 *   get:
 *     summary: Lista todas as experiências de um usuário
 *     tags: [Experiences]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário para listar as experiências
 *     responses:
 *       200:
 *         description: Lista de experiências retornada com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.get("/:userId", ExperienceController.listByUser);

/**
 * @swagger
 * /experiences/{id}:
 *   patch:
 *     summary: Atualiza uma experiência existente
 *     tags: [Experiences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da experiência a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               companyName:
 *                 type: string
 *                 description: Nome da empresa
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Data de início
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: Data de término
 *               role:
 *                 type: string
 *                 description: Função desempenhada
 *               activityDescription:
 *                 type: string
 *                 description: Descrição das atividades realizadas
 *     responses:
 *       200:
 *         description: Experiência atualizada com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.patch("/:id", ExperienceController.update);

/**
 * @swagger
 * /experiences/{id}:
 *   delete:
 *     summary: Exclui uma experiência
 *     tags: [Experiences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da experiência a ser excluída
 *     responses:
 *       200:
 *         description: Experiência excluída com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.delete("/:id", ExperienceController.delete);

module.exports = router;
