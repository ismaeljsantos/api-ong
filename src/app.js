const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const routes = require("./routes/index");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swagger");
require("./models");

const app = express();

app.use(cors());
app.use(express.json()); // Substituindo bodyParser.json()

app.use("/api", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

console.log("Swagger disponível em http://localhost:3000/api-docs");

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados bem-sucedida!");
    const isDev = process.env.NODE_ENV === "development";
    if (isDev) {
      return sequelize.sync({ alter: true }); // Apenas em dev
    }
    return Promise.resolve();
  })
  .then(() => console.log("Banco de dados sincronizado com sucesso!"))
  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados:", error.message);
    process.exit(1); // Encerra o processo em caso de erro crítico
  });

module.exports = app;
