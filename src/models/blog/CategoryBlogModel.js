const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const CategoryBlogModel = sequelize.define(
  "CategoryBlog",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "blogCategories",
    timestamps: true,
  }
);

module.exports = CategoryBlogModel;
