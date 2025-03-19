const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/index");
const models = require("./models/index");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");

const { UserModel, EducationModel, ContactModel, CategoryModel, AddressModel } =
  models;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

console.log("Swagger disponível em http://localhost:3000/api-docs");

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
