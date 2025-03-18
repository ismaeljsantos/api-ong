const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const EducationModel = sequelize.define(
  "Education",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    instituicao: {
      type: DataTypes.STRING,
    },
    curso: {
      type: DataTypes.STRING,
    },
    anoInicial: {
      type: DataTypes.DATEONLY,
    },
    anoFinal: {
      type: DataTypes.DATEONLY,
    },
    userId: {
      type: DataTypes.UUID,
    },
  },
  {
    tableName: "education",
    timestamps: true,
  }
);
module.exports = EducationModel;
