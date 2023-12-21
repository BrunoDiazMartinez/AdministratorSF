// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./DB");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/usuario", async (req, res) => {
  try {
    const orden = await pool.query(
      "SELECT * from usuarios"
    );
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.listen(3000, () => {
   console.log("Server is running on port 3000");
 });