const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const TagModel = sequelize.define(
  "Tag",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(80),
      allowNull: false,
      unique: true,
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "tags",
    timestamps: true,
  }
);

module.exports = TagModel;
