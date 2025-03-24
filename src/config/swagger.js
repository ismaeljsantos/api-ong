const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentação da API usando Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Servidor de desenvolvimento",
      },
    ],
  },
  apis: ["./src/routes/**/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
