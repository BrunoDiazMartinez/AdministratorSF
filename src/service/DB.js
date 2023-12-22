// db.js
const { Pool } = require("pg");

const pool = new Pool({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "root01",
  database: "restaurant_Proyect",
});

module.exports = pool;
