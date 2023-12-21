import React from "react";
import "./editar.css";
import { Link } from "react-router-dom";

export const Editar = () => {
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
        <div className="text-wrapper-3">Editar</div>
        <div className="images-wrapper">
          <img className="images"/>
        </div>
        <div className="frame-5">
          <div className="frame-6">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Nombre:</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-5">Pozole</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Precio</div>
            </div>
            <div className="frame-7">
              <div className="text-wrapper-5">$55</div>
            </div>
          </div>
          <div className="frame-6">
            <div className="frame-8">
              <div className="text-wrapper-6">Descripción:</div>
            </div>
            <div className="frame-9">
              <p className="p">
                El pozole es un caldo tradicional mexicano hecho a base de granos de maíz nixtamalizados, comúnmente de
                la variedad cacahuazintle, al que se agregan carnes, verduras y especias muy variadas según la región.
              </p>
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