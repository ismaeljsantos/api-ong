const express = require("express");
const PostController = require("../../controllers/blog/PostController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de posts do blog
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Cria um novo post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título do post
 *               conteudo:
 *                 type: string
 *                 description: Conteúdo do post
 *               autorId:
 *                 type: string
 *                 description: ID do autor do post
 *               imagemCapa:
 *                 type: string
 *                 description: URL da imagem de capa
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.post("/", PostController.create);

/**
 * @swagger
 * /posts/createWithOptionalTags:
 *   post:
 *     summary: Cria um novo post com tags opcionais
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Título do post
 *               conteudo:
 *                 type: string
 *                 description: Conteúdo do post
 *               autorId:
 *                 type: string
 *                 description: ID do autor do post
 *               imagemCapa:
 *                 type: string
 *                 description: URL da imagem de capa
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Lista de tags associadas ao post (opcional)
 *     responses:
 *       201:
 *         description: Post criado com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.post("/createWithOptionalTags", PostController.createWithOptionalTags);

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Lista todos os posts
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filtro pelo título do post
 *     responses:
 *       200:
 *         description: Lista de posts retornada com sucesso
 *       400:
 *         description: Requisição inválida
 */
router.get("/", PostController.list);

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Busca um post pelo ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post retornado com sucesso
 *       404:
 *         description: Post não encontrado
 */
router.get("/:id", PostController.getById);

/**
 * @swagger
 * /posts/{id}:
 *   patch:
 *     summary: Atualiza um post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 description: Novo título do post
 *               conteudo:
 *                 type: string
 *                 description: Novo conteúdo do post
 *               imagemCapa:
 *                 type: string
 *                 description: Nova URL da imagem de capa
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso
 *       400:
 *         description: Requisição inválida
 *       404:
 *         description: Post não encontrado
 */
router.patch("/:id", PostController.update);

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Exclui um post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do post
 *     responses:
 *       200:
 *         description: Post excluído com sucesso
 *       404:
 *         description: Post não encontrado
 */
router.delete("/:id", PostController.delete);

module.exports = router;

// const express = require("express");
// const PostController = require("../../controllers/blog/PostController");

// const router = express.Router();

// /**
//  * @swagger
//  * tags:
//  *   name: Posts
//  *   description: Gerenciamento de posts do blog
//  */

// /**
//  * @swagger
//  * /posts:
//  *   post:
//  *     summary: Cria um novo post
//  *     tags: [Posts]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               titulo:
//  *                 type: string
//  *                 description: Título do post
//  *               conteudo:
//  *                 type: Text
//  *                 description: Conteúdo do post
//  *               autorId:
//  *                 type: string
//  *                 description: ID do autor do post
//  *               imagemCapa:
//  *                 type: string
//  *                 description: URL da imagem de capa
//  *     responses:
//  *       201:
//  *         description: Post criado com sucesso
//  *       400:
//  *         description: Requisição inválida
//  */
// router.post("/", PostController.create);

// /**
//  * @swagger
//  * /posts/createWithOptionalTags:
//  *   post:
//  *     summary: Cria um novo post com tags opcionais
//  *     tags: [Posts]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               titulo:
//  *                 type: string
//  *                 description: Título do post
//  *               conteudo:
//  *                 type: Text
//  *                 description: Conteúdo do post
//  *               autorId:
//  *                 type: string
//  *                 description: ID do autor do post
//  *               imagemCapa:
//  *                 type: string
//  *                 description: URL da imagem de capa
//  *               tags:
//  *                 type: array
//  *                 items:
//  *                   type: string
//  *                 description: Tags associadas ao post (opcional)
//  */
// router.post("/createWithOptionalTags", PostController.createWithOptionalTags);
// /**
//  * @swagger
//  * /posts:
//  *   get:
//  *     summary: Lista todos os posts
//  *     tags: [Posts]
//  *     parameters:
//  *       - in: query
//  *         name: title
//  *         schema:
//  *           type: string
//  *         description: Filtro pelo título do post
//  *     responses:
//  *       200:
//  *         description: Lista de posts retornada com sucesso
//  *       400:
//  *         description: Requisição inválida
//  */
// router.get("/", PostController.list);

// /**
//  * @swagger
//  * /posts/{id}:
//  *   get:
//  *     summary: Busca um post pelo ID
//  *     tags: [Posts]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: ID do post
//  *     responses:
//  *       200:
//  *         description: Post retornado com sucesso
//  *       404:
//  *         description: Post não encontrado
//  */
// router.get("/:id", PostController.getById);

// /**
//  * @swagger
//  * /posts/{id}:
//  *   patch:
//  *     summary: Atualiza um post
//  *     tags: [Posts]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: ID do post
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               title:
//  *                 type: string
//  *                 description: Novo título do post
//  *               content:
//  *                 type: string
//  *                 description: Novo conteúdo do post
//  *               coverImage:
//  *                 type: string
//  *                 description: Nova URL da imagem de capa
//  *     responses:
//  *       200:
//  *         description: Post atualizado com sucesso
//  *       400:
//  *         description: Requisição inválida
//  *       404:
//  *         description: Post não encontrado
//  */
// router.patch("/:id", PostController.update);

// /**
//  * @swagger
//  * /posts/{id}:
//  *   delete:
//  *     summary: Exclui um post
//  *     tags: [Posts]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: ID do post
//  *     responses:
//  *       200:
//  *         description: Post excluído com sucesso
//  *       404:
//  *         description: Post não encontrado
//  */
// router.delete("/:id", PostController.delete);

// module.exports = router;
