const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Tag = sequelize.define(
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
    },
  },
  {
    tableName: "tags",
    timestamps: true,
  }
);

module.exports = Tag;
