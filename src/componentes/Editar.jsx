import React, { useState, useEffect } from 'react';
import "./editar.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Editar = () => {
  const { id_platillo } = useParams();  // Obtener id_platillo de las props
  console.log('ID del platillo:', id_platillo);
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, [id_platillo]);

  const handleGuardarCambios = () => {
    fetch(`http://localhost:3001/platillos/${id_platillo}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(platillo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor:', data);
      })
      .catch((error) => console.error('Error al guardar cambios: ', error));
  };

  const handleCancelarCambios = () => {
    console.log('Cancelando cambios');
    setPlatillo(originalPlatillo);
  };

  const handleEliminarPlatillo = () => {
    console.log('Eliminando platillo:', platillo.id_platillo);
    fetch(`http://localhost:3001/platillos/${platillo.id_platillo}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor al eliminar:', data);
      })
      .catch((error) => console.error('Error al eliminar platillo: ', error));
  };
  console.log({platillo}); 
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
            <div className="frame-7">
              <div className="text-wrapper-5">{platillo.nombre_platillo}</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Precio</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-5">{platillo.precio}</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-8">
              <div className="text-wrapper-6">Descripción:</div>
            </div>
            <div className="frame-9">
              <p className="p">{platillo.descripcion_platillo}</p>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <Link to='/Dishes' className="frame-11">
            <div className="text-wrapper">Cancelar</div>
          </Link>
          <div className="frame-12">
            <div className="text-wrapper-7">Listo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editar;