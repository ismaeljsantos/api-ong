const express = require("express");
const addressController = require("../controllers/addressController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Address:
 *       type: object
 *       required:
 *         - logradouro
 *         - numero
 *         - complemento
 *         - bairro
 *         - cidade
 *         - estado
 *         - cep
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: ID único do endereço
 *         logradouro:
 *           type: string
 *           description: Rua do endereço
 *         numero:
 *           type: string
 *           description: Numero da casa
 *         complemento:
 *           type: string
 *           description: complemento do endereço
 *         bairro:
 *           type: string
 *           description: nome do bairro
 *         cidade:
 *           type: string
 *           description: Nome da cidade
 *         estado:
 *           type: string
 *           description: Sigla do estado UF
 *         cep:
 *           type: string
 *           description: CEP do endereço
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID do usuário proprietário do endereço
 */

/**
 * @swagger
 * /addresses:
 *   post:
 *     summary: Cria um novo endereço
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       201:
 *         description: Endereço criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 */
router.post("/", addressController.create);

/**
 * @swagger
 * /addresses/{id}:
 *   get:
 *     summary: Busca um endereço pelo ID
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID único do endereço
 *     responses:
 *       200:
 *         description: Detalhes do endereço
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Endereço não encontrado
 */
router.get("/:id", addressController.getAddressById);

/**
 * @swagger
 * /addresses/user/{userId}:
 *   get:
 *     summary: Busca os endereços de um usuário
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de endereços
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Address'
 *       404:
 *         description: Nenhum endereço encontrado
 */
router.get("/user/:userId", addressController.getAddressByUserId);

/**
 * @swagger
 * /addresses/{id}:
 *   put:
 *     summary: Atualiza os dados de um endereço
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID único do endereço
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Address'
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Address'
 *       404:
 *         description: Endereço não encontrado
 */
router.put("/:id", addressController.update);

/**
 * @swagger
 * /addresses/{id}:
 *   delete:
 *     summary: Remove um endereço pelo ID
 *     tags: [Address]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         required: true
 *         description: ID único do endereço
 *     responses:
 *       200:
 *         description: Endereço removido com sucesso
 *       404:
 *         description: Endereço não encontrado
 */
router.delete("/:id", addressController.delete);

module.exports = router;
