const { Sequelize } = require("sequelize");
const Pool = require("pg").Pool;
require("dotenv").config();
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, user, password, {
  dialect: "postgres",
});

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
});

testDbConnection();

module.exports = { sequelize, pool };
