import React, { useState } from "react";
import './login.css';
import { Link, Navigate, Route} from "react-router-dom";
import { useForm } from "react-hook-form";
import Dishes from "./Dishes";
import ID from './Rest';

export const Login = () => {
    const [magicword, setMagicWord] = useState('');

    function handleInputChange(event){
        setMagicWord(event.target.value)
    }
    function handleSubmit(){
        if(magicword == ID){
            <Route render={<Dishes/>}/>
        }
        else{
            alert('Algo fallo');
        }
    }
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
                <form onSubmit={handleSubmit}className="frame-5" >
                    <div className="text-wrapper-3">Bienvenido</div>
                    <img className="img" />
                    <div className="frame-6">
                        <div className="frame-7">
                            <img className="img-2" />
                            <div className="text-wrapper-4">Usuario/ID</div>
                        </div>
                        <input type="text" autoComplete="off" className="frame-8" placeholder="Usuario/ID"
                            value={magicword} onChange={handleInputChange}/>
                    </div>
                    <div className="frame-9">
                        <div className="frame-7">
                            <img className="img-3" />
                            <div className="text-wrapper-4">Contraseña</div>
                        </div>
                        <input className="frame-8" type="text" autoComplete="off" placeholder="Constraseña"/>

                    </div>
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