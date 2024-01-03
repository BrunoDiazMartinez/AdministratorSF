import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './platillos.css';

function Dishes() {
  const [ListaPlatillos, setListaPlatillos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/platillos')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from server:', data);
        setListaPlatillos(data);
      })
      .catch((error) => console.error('Error al obtener platillos: ', error));
  }, []);

  return (
    <div className="comida">
      <div className="div">
        <div className="overlap">
          <div className="frame">
            <Link to="/" className="frame-2">
              <div className="text-wrapper">Usuario</div>
              <img className="vector" />
            </Link>
          </div>
          <div className="frame-3">
            <img className="intersect" />
            <div className="text-wrapper-2">Restaurant</div>
          </div>
        </div>
        <div className="text-wrapper-4">Platillos</div>
        <div className="frame-6">
          {ListaPlatillos.map((platillo) => (
            <div key={platillo.id_platillo} className="frame-7">
              <div className="frame-8">
                <div className="text-wrapper-5">{platillo.nombre_platillo}</div>
                <div className="images-wrapper-1">
                </div>
              </div>
              <div className="frame-wrapper">
                <Link to={`/Editar/${platillo.id_platillo}`} className="frame-9">
                  <img className="material-symbols" />
                  <div className="text-wrapper-6">Editar</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="overlap-group-wrapper">
          <Link to='/Agregar'>
            <div className="overlap-group">
              <div className="frame-5">
                <img className="carbon-add-filled" />
                <div className="text-wrapper-3">Agregar</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="frame-10">
          <img className="carbon-filter" />
          <div className="text-wrapper-7">Buscar</div>
        </div>
      </div>
    </div>
  );
}
export default Dishes;