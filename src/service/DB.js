// db.js
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "root01",
  port: 5432,
  database: "restaurant_Proyect",
});

module.exports = pool;
