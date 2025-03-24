const Post = require("./PostModel");
const CategoryBlog = require("./CategoryBlogModel");
const User = require("../user/UserModel");
const Tag = require("./TagModel");

User.hasMany(Post, { foreignKey: "autorId", onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "autorId" });

Post.belongsToMany(CategoryBlog, {
  through: "PostCategoryBlogs",
  foreignKey: "postId",
  otherKey: "categoryBlogId",
});
CategoryBlog.belongsToMany(Post, {
  through: "PostCategoryBlogs",
  foreignKey: "categoryBlogId",
  otherKey: "postId",
});

Post.belongsToMany(Tag, {
  through: "PostTags",
  foreignKey: "postId",
  otherKey: "tagId",
});
Tag.belongsToMany(Post, {
  through: "PostTags",
  foreignKey: "tagId",
  otherKey: "postId",
});

module.exports = {
  Post,
  CategoryBlog,
  Tag,
};
