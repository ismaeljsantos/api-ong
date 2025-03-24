const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const PostModel = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    subTitulo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    conteudo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagemCapa: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    autorId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

module.exports = PostModel;
