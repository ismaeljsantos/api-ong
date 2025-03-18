const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/index");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", routes);

sequelize
  .authenticate()
  .then(() => console.log("Conexão com o banco de dados bem-sucedida!"))
  .catch((error) =>
    console.log("Erro ao conectar com o banco de dados:", error)
  );

module.exports = app;
