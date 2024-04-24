const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Viga Food Delivery API",
      version: "1.0.0",
      description: "API documentation for the Food Delivery App",
    },
  },
  apis: [path.resolve(__dirname, "*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
