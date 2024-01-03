import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './editar.css';

const Editar = () => {
  const { id_platillo } = useParams();
  const [platillo, setPlatillo] = useState({
    id_platillo: '',
    nombre_platillo: '',
    precio: '',
    descripcion: ''
  });
  const [originalPlatillo, setOriginalPlatillo] = useState({
    id_platillo: '',
    nombre_platillo: '',
    precio: '',
    descripcion: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(`http://localhost:3001/platillos/${id_platillo}`);
        setPlatillo(result.data);
        setOriginalPlatillo(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id_platillo]);

  const handleCancelarCambios = () => {
    console.log('Cancelando cambios');
    setPlatillo(originalPlatillo);
  };

  const handleGuardarCambios = () => {
    axios.put(`http://localhost:3001/platillos/${platillo.id_platillo}`, platillo)
      .then((response) => {
        console.log('Respuesta del servidor:', response.data);
      })
      .catch((error) => console.error('Error al guardar cambios: ', error));
  };
  
  const handleEliminarPlatillo = () => {
    console.log('Eliminando platillo:', platillo.id_platillo);
    axios.delete(`http://localhost:3001/platillos/${platillo.id_platillo}`)
      .then((response) => {
        console.log('Respuesta del servidor al eliminar:', response.data);
        // Redirige a la página de platillos después de eliminar
      })
      .catch((error) => console.error('Error al eliminar platillo: ', error));
  };

  console.log({ platillo });
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="frame">
            <div className="frame-2">
              <div className="text-wrapper">Usuario</div>
              <img className="vector" />
            </div>
          </div>
          <div className="frame-3">
            <img className="intersect" />
            <div className="text-wrapper-2">Restaurant</div>
          </div>
        </div>
        <div className="frame-4" />
        <div className="text-wrapper-3">Editar</div>
        <div className="images-wrapper">
          <img className="images" />
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Nombre:</div>
            </div>
            <div>
              <input
                className="text-wrapper-5"
                value={platillo.nombre_platillo}
                onChange={(e) => setPlatillo({ ...platillo, nombre_platillo: e.target.value })}
              />
            </div>
          </div>
          <div className="frame-6">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Precio</div>
            </div>
            <div>
              <input
                className="text-wrapper-5"
                value={platillo.precio}
                onChange={(e) => setPlatillo({ ...platillo, precio: e.target.value })}
              />
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-8">
              <div className="text-wrapper-6">Descripción:</div>
            </div>
            <textarea
              className="frame-9"
              value={platillo.descripcion}
              onChange={(e) => setPlatillo({ ...platillo, descripcion: e.target.value })}
            />
          </div>
        </div>
        <div className="frame-10">
          <Link to='/Dishes' className="frame-11">
            <div className="text-wrapper" onClick={handleCancelarCambios}>
              Cancelar
            </div>
          </Link>
          <div className="frame-12">
            <Link to='/Dishes' className="text-wrapper-7" onClick={handleGuardarCambios}>
              Guardar
            </Link>
          </div>
          <div className="frame-13">
            <Link to='/Dishes/#' className="text-wrapper-8" onClick={handleEliminarPlatillo}>
              Eliminar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editar;