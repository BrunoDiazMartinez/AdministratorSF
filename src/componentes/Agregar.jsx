import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './agregar.css'; // Estilos externos

const Agregar = () => {
  const [nuevoPlatillo, setNuevoPlatillo] = useState({
    nombre_platillo: '',
    precio: '',
    descripcion: '',
    id_tipo_menu: '', // Agregado
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleGuardarPlatillo = () => {
    setLoading(true);

    axios
      .post('http://localhost:3001/platillos', nuevoPlatillo)
      .then((response) => {
        console.log('Respuesta del servidor al agregar platillo:', response.data);
        setSuccess(true);
        // Aquí puedes redirigir a la página de platillos o realizar alguna otra acción
      })
      .catch((error) => {
        console.error('Error al agregar platillo: ', error);
        setError('Error al guardar el platillo. Por favor, inténtelo de nuevo.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap-group">
          <div className="frame">
            <div className="frame-2">
              <div className="text-wrapper">Usuario</div>
              <img className="vector"/>
            </div>
          </div>
          <div className="frame-3">
            <img className="intersect"/>
            <div className="text-wrapper-2">Restaurant</div>
          </div>
        </div>
        <div className="frame-4" />
        <div className="text-wrapper-3">Agregar Platillo</div>
        <div className="images-wrapper">
          <img className="images"/>
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="div-wrapper">
              <label htmlFor="nombrePlatillo" autoComplete="off" className="text-wrapper-4">
                Nombre:
              </label>
            </div>
            <input
              id="nombrePlatillo"
              className="frame-7"
              type="text"
              autoComplete="off"
              value={nuevoPlatillo.nombre_platillo}
              onChange={(e) => setNuevoPlatillo({ ...nuevoPlatillo, nombre_platillo: e.target.value })}
            />
          </div>
          <div className="frame-6">
            <div className="div-wrapper">
              <label htmlFor="precioPlatillo" className="text-wrapper-4">
                Precio
              </label>
            </div>
            <input
              id="precioPlatillo"
              className="frame-7"
              autoComplete="off"
              value={nuevoPlatillo.precio}
              onChange={(e) => setNuevoPlatillo({ ...nuevoPlatillo, precio: e.target.value })}
            />
          </div>
          <div className="frame-6">
            <div className="frame-8">
              <label htmlFor="descripcionPlatillo" className="text-wrapper-6">
                Descripción:
              </label>
            </div>
            <textarea
              id="descripcionPlatillo"
              className="frame-9"
              autoComplete="off"
              value={nuevoPlatillo.descripcion}
              onChange={(e) => setNuevoPlatillo({ ...nuevoPlatillo, descripcion: e.target.value })}
            />
          </div>
          <div className="frame-6">
            <div className="div-wrapper">
              <label htmlFor="idTipoMenu" className="text-wrapper-4">
                ID Tipo de Menú:
              </label>
            </div>
            <input
              id="idTipoMenu"
              className="frame-7"
              type="text"
              autoComplete="off"
              value={nuevoPlatillo.id_tipo_menu}
              onChange={(e) => setNuevoPlatillo({ ...nuevoPlatillo, id_tipo_menu: e.target.value })}
            />
          </div>
        </div>

        <div className="frame-10">
          <Link to="/Dishes" className="frame-11">
            <div className="text-wrapper">Cancelar</div>
          </Link>
          <div className="frame-12">
            <Link to="/Dishes" className="text-wrapper-7" onClick={handleGuardarPlatillo} disabled={loading}>
              {loading ? 'Guardando...' : 'Guardar'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agregar;