const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserModel = sequelize.define(
  "User",
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
    sobrenome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dataNascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
    },
    cpfIv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "O campo cpfIv não pode ser nulo" },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genitor1: {
      type: DataTypes.STRING,
    },
    genitor2: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = UserModel;
