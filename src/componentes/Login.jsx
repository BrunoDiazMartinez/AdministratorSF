import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import axios from "axios";

const Login = () => {
  const [correo_electronico, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:3001/usuario");
        setUsuario(result.data.correo_electronico);
        setUsuario(result.data.Pwd);
      } catch (error) {
        console.error('error fetching data:', error);
      }
    };

    fetchData();
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo_electronico, password }),
      });
      console.log('Respuesta del servidor:', response.status, response.statusText);


      if (response.ok) {
        navigate('/Dishes');
        console.log('Logeado');
      } else {
        const data = await response.json();
        console.error('Error en el inicio de sesión:', data.message);
        setError('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud POST a /login:', error);
      setError('Error en el inicio de sesión');
    }

  };
  return (
    <div className="login">
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
        <form onSubmit={(event) => handleSubmit(event)} className="frame-5">
          <div className="text-wrapper-3">Bienvenido</div>
          <img className="img" />
          <div className="frame-6">
            <div className="frame-7">
              <img className="img-2" />
              <div className="text-wrapper-4">Usuario/ID</div>
            </div>
            <input type="text" autoComplete="off" id="usuario" className="frame-8" placeholder="Usuario/ID"
              onChange={handleUsernameChange} />
          </div>
          <div className="frame-9">
            <div className="frame-7">
              <img className="img-3" />
              <div className="text-wrapper-4">Contraseña</div>
            </div>
            <input
              className="frame-8"
              type="password"
              id="password"
              value={password}
              autoComplete="off"
              placeholder="Contraseña"
              onChange={handlePasswordChange}
            />


          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <button type="submit" className="div-wrapper">
            <div className="text-wrapper-4">Iniciar sesión</div>
          </button>
        </form>
        <script src="/validar" />
      </div>
    </div>
  );
}
export default Login;