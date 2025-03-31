const PostService = require("../../services/blog/postService");
const TagService = require("../../services/blog/tagService");

class PostController {
  async create(req, res) {
    try {
      const post = req.body;
      const newPost = await PostService.create(post);
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async createWithOptionalTags(req, res) {
    try {
      const { titulo, conteudo, autorId, imagemCapa, tags } = req.body;

      // Validações básicas
      if (!titulo || !conteudo || !autorId) {
        return res.status(400).json({
          error: "Os campos 'titulo', 'conteudo' e 'autorId' são obrigatórios.",
        });
      }

      // Cria o post
      const post = await PostService.createPost({
        titulo,
        conteudo,
        autorId,
        imagemCapa,
      });

      // Validação e processamento das tags, caso fornecidas
      let tagInstances = [];
      if (tags && Array.isArray(tags) && tags.length > 0) {
        tagInstances = await Promise.all(
          tags.map(async (tagNome) => {
            const normalizedTagName = tagNome.trim().toLowerCase(); // Padroniza o nome da tag
            const [tag] = await TagService.findOrCreateTag(normalizedTagName); // Busca ou cria a tag
            return tag; // Certifique-se de retornar a instância da tag
          })
        );

        // Relaciona as tags ao post
        await post.addTags(tagInstances);
      }

      // Resposta de sucesso
      return res.status(201).json({
        message: "Post criado com sucesso.",
        post,
        tags: tagInstances, // Inclui as instâncias de tags na resposta
      });
    } catch (error) {
      // Resposta de erro
      return res.status(500).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {
      const filters = req.query;
      const posts = await PostService.getAllPosts(filters);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getPostById(id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const post = req.body;
      const updatedPost = await PostService.update(id, post);
      return res.status(200).json(updatedPost);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await PostService.delete(id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new PostController();
