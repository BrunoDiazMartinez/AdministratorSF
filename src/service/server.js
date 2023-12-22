// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./DB");

const app = express();

app.use(bodyParser.json());
app.use('/platillos', cors());
app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


app.get("/usuario", async (req, res) => {
  try {
    const orden = await pool.query("SELECT * from usuarios");
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.post('/login', async (req, res) => {
  const { correo_electronico, password } = req.body;

  try {
    const query = 'SELECT * FROM usuarios WHERE correo_electronico = $1 AND password = $2';
    const result = await pool.query(query, [correo_electronico, password]);

    if (result.rowCount > 0) {
      res.status(200).json({success: true, message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({success: true, message: 'Credenciales incorrectas. Inténtalo de nuevo.' });
    }
  } catch (error) {
    console.error('Error en la solicitud de inicio de sesión:', error);
    res.status(500).json({success: true, message: 'Error al procesar la solicitud' });
  }
});


app.post('/platillos', async (req, res) => {
  const { nombre_platillo, precio, descripcion, id_tipo_menu } = req.body;

  try {
      const query = 'INSERT INTO platillos (nombre_platillo, descripcion_platillo, precio, id_tipo_menu) VALUES ($1, $2, $3, $4) RETURNING *';
      const result = await pool.query(query, [nombre_platillo, descripcion, precio, id_tipo_menu]);

      if (result.rowCount > 0) {
          res.status(201).json({ success: true, platillo: result.rows[0], message: 'Platillo agregado exitosamente' });
      } else {
          res.status(500).json({ success: false, message: 'Error al agregar el platillo' });
      }
  } catch (error) {
      console.error('Error en la solicitud POST a /platillos:', error);
      res.status(500).json({ success: false, error: 'Error en el servidor al procesar la solicitud POST a /platillos' });
  }
});

app.get("/platillos", async (req, res) => {
  try {
    const orden = await pool.query(
      "SELECT * FROM platillos"
    );
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});



app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
