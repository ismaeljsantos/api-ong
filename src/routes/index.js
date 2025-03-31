const express = require("express");
const userRoutes = require("./user");
const postRoutes = require("./blog");

const router = express.Router();

// Rotas de Usuário
router.use("/users", userRoutes.userRoutes);
router.use("/addresses", userRoutes.addressRoutes);
router.use("/login", userRoutes.loginRoutes);
router.use("/categories", userRoutes.categoryRoutes);

// Rotas de Post
router.use("/posts", postRoutes.postRoutes);
router.use("/tags", postRoutes.tagRoutes);

module.exports = router;
