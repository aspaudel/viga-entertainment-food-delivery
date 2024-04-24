/**
 * @swagger
 * /:
 *   get:
 *     summary: Test endpoint
 *     description: Returns a test message.
 *     responses:
 *       '200':
 *         description: A successful response.
 * /seedData:
 *    get:
 *      summary: To Seed the database
 *      description: Seeds the database based on our file.
 *      responses:
 *       '200':
 *         description: Successfully seeded the database!
 *
 * /calculatePrice:
 *    post:
 *      summary: To calculate the price of based on the request
 *      description: Calculates the prices by invoking the database and doing the necessary calculation in the backend.
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                zone:
 *                  type: string
 *                organization_id:
 *                  type: string
 *                item_id:
 *                  type: string
 *                total_distance:
 *                  type: number
 *                item_type:
 *                  type: string
 *      responses:
 *       '200':
 *         description: Successfully calculated the price!
 */

const express = require("express");
const Organizations = require("./Models/Organizations");
const Items = require("./Models/Items");
const Pricings = require("./Models/Pricings");
const controller = require("./Controllers/controller");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("Request -> GET!");
});

app.get("/seedData", controller.seedData);

app.post("/calculatePrice", controller.calculatePrice);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
