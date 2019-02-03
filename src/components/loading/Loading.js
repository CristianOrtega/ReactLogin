import React, { Component } from 'react';
import './Loading.css';
import cargando from './cargando.svg';


class Loading extends Component {
    render() {
        return (
            <div className="cargando d-flex justify-content-center align-items-center">
                <div className="contenedor">
                    <img src={cargando} className="app-cargando mt-2 mb-2" alt="logo" />
                    <h4>Cargando...</h4>
                </div>
            </div>
        );
    }
}

export default Loading;