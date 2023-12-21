import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './platillos.css';

function Dishes() {
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
        <div className="frame-4" />
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
        <div className="text-wrapper-4">Platillos</div>
        <div className="frame-6">
          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-5">Pozole</div>
              <div className="images-wrapper-1">
              </div>
            </div>
            <div className="frame-wrapper">
              <Link to="/Editar" className="frame-9">
                <img className="material-symbols" />
                <div className="text-wrapper-6">Editar</div>
              </Link>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-5">Sushi</div>
              <div className="images-wrapper-2">
                <img className="images" />
              </div>
            </div>
            <div className="frame-wrapper">
              <Link to="/Editar" className="frame-9">
                <img className="material-symbols" />
                <div className="text-wrapper-6">Editar</div>
              </Link>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-5">Ensalada</div>
              <div className="images-wrapper-3">
              </div>
            </div>
            <div className="frame-wrapper">
              <Link to="/Editar" className="frame-9">
                <img className="material-symbols" />
                <div className="text-wrapper-6">Editar</div>
              </Link>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-5">Pasta</div>
              <div className="images-wrapper-4">
              </div>
            </div>
            <div className="frame-wrapper">
              <Link to="/Editar" className="frame-9">
                <img className="material-symbols" />
                <div className="text-wrapper-6">Editar</div>
              </Link>
            </div>
          </div>
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