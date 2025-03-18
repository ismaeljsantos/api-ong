const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AddressModel = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    logradouro: {
      type: DataTypes.STRING,
    },
    numero: {
      type: DataTypes.STRING,
    },
    complemento: {
      type: DataTypes.STRING,
    },
    bairro: {
      type: DataTypes.STRING,
    },
    cidade: {
      type: DataTypes.STRING,
    },
    uf: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.STRING(8),
    },
  },
  {
    tableName: "address",
    timestamps: true,
  }
);

module.exports = AddressModel;
