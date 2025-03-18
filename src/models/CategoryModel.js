const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CategoryModal = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "categories",
    timestamps: true,
  }
);

module.exports = CategoryModal;
