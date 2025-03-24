const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const ExperienceModel = sequelize.define(
  "Experience",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nomeEmpresa: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    inicio: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    fim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    atividade: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricaoAtividade: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "experiences",
    timestamps: true,
  }
);

module.exports = ExperienceModel;
