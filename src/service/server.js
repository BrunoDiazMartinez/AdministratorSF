// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./DB");
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',  // Reemplaza con el dominio de tu aplicación React
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

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
      res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      res.status(401).json({ success: true, message: 'Credenciales incorrectas. Inténtalo de nuevo.' });
    }
  } catch (error) {
    console.error('Error en la solicitud de inicio de sesión:', error);
    res.status(500).json({ success: true, message: 'Error al procesar la solicitud' });
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

app.get("/platillos/:id", async (req, res) => {
  const { id } = req.params; // Obtener el ID del platillo de los parámetros de la URL
  try {
    const orden = await pool.query(
      "SELECT * FROM platillos WHERE id_platillo = $1",
      [id]
    );
    if (orden.rows.length === 0) {
      return res.status(404).json({ error: "Platillo no encontrado" });
    }
    res.json(orden.rows[0]); // Devolver el platillo encontrado (debería ser solo uno)
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Unable to fetch product" });
  }
});

app.put('/platillos/:id', async (req, res) => {
  const idPlatillo = req.params.id;
  const { nombre_platillo, precio, descripcion } = req.body;

  try {
    const platilloExistente = await pool.query('SELECT * FROM platillos WHERE id_platillo = $1', [idPlatillo]);

    if (platilloExistente.rows.length === 0) {
      return res.status(404).json({ message: 'Platillo no encontrado' });
    }
    const resultado = await pool.query(
      'UPDATE platillos SET nombre_platillo = $1, precio = $2, descripcion_platillo = $3 WHERE id_platillo = $4 RETURNING *',
      [nombre_platillo, precio, descripcion, idPlatillo]
    );

    res.json({ message: 'Platillo actualizado con éxito', updatedPlatillo: resultado.rows[0] });
  } catch (error) {
    console.error('Error al actualizar el platillo:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.delete('/platillos/:id', async (req, res) => {
  const idPlatillo = req.params.id;
  console.log('ID del platillo a eliminar:', idPlatillo);

  try {
    const platilloExistente = await pool.query('SELECT * FROM platillos WHERE id_platillo = $1', [idPlatillo]);

    if (platilloExistente.rows.length === 0) {
      return res.status(404).json({ message: 'Platillo no encontrado' });
    }

    await pool.query('DELETE FROM platillos WHERE id_platillo = $1', [idPlatillo]);

    res.json({ message: 'Platillo eliminado con éxito' });
  } catch (error) {
    console.error('Error al eliminar el platillo:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
