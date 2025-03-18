const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ContactModel = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM("fixo", "celular"),
    },
    primario: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    permiteContato: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "contacts",
    timestamps: true,
  }
);

module.exports = ContactModel;
