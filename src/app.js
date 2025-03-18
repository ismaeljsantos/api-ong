const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/index");
const models = require("./models/index");

const { UserModel, EducationModel, ContactModel, CategoryModel, AddressModel } =
  models;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados bem-sucedida!");
    const isDev = process.env.NODE_ENV === "development";
    return isDev ? sequelize.sync({ alter: true }) : Promise.resolve();
  })
  .then(() => console.log("Banco de dados sincronizado com sucesso!"))
  .catch((error) =>
    console.log("Erro ao conectar com o banco de dados:", error)
  );

module.exports = app;
