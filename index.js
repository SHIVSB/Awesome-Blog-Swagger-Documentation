const express = require("express");
const app = express();
const logger = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Awesome Blog backend swagger documentation",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4000/api/v1/",
        description: "Development server",
      },
      {
        url: "https://bloggingwebsite-backend.herokuapp.com/",
        description: "Production Server",
      },
    ],
  },
  apis: ["swagger.yml"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use(logger("dev"));
app.use(cors({ origin: "*" }));

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(
    "This is the Awesome Blog app Swagger documentation server. Happy Hacking!"
  );

  console.log(`Server running on port : ${PORT}`);
});
