// src/models/blog/index.js
const Post = require("./PostModel");
const Tag = require("./TagModel");
const CategoryBlog = require("./CategoryBlogModel");
const User = require("../user/UserModel");

// Relacionamentos
User.hasMany(Post, { foreignKey: "autorId", onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "autorId" });

Post.belongsToMany(CategoryBlog, {
  through: "PostCategoryBlogs", // Tabela intermediária
  foreignKey: "postId",
  otherKey: "categoryBlogId",
});
CategoryBlog.belongsToMany(Post, {
  through: "PostCategoryBlogs",
  foreignKey: "categoryBlogId",
  otherKey: "postId",
});

Post.belongsToMany(Tag, {
  through: "PostTags", // Tabela intermediária
  foreignKey: "postId",
  otherKey: "tagId",
});
Tag.belongsToMany(Post, {
  through: "PostTags",
  foreignKey: "tagId",
  otherKey: "postId",
});

module.exports = { Post, Tag, User, CategoryBlog };
