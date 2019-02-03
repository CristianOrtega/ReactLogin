import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import '../../App.css';


class EnableUser extends Component {
    constructor() {
        super();
        this.state = {
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        let me = this;
        let rut = me._getRutEncode(document.URL);
        let client = me._getClientEncode(document.URL);
        e.preventDefault();
        if (!me.validateForm(me.state)) {
            return null;
        }
        let body = `rut=${rut}&currentPassword=${me.state.currentPassword}&newPassword=${me.state.newPassword}&client=${client}`;
        alert('Enviando...');
        fetch('http://localhost:9090/KNT_ALL_WS/webresources/report/loginTest', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
            body: body
        })
            .then((response) => {
                debugger;
                return response.json()
            })
            .then((recurso) => {
                debugger;
                console.log(recurso)
            })
    }

    validateForm(state) {
        let isValid = true;
        if (state.currentPassword === "" && state.newPassword === "" && state.confirmNewPassword === "") {
            alert('Debe Completar el formulario');
            isValid = false;
        } else if (state.newPassword !== state.confirmNewPassword) {
            alert('La nueva contraseña no coiciden.');
            isValid = false;
        }
        return isValid;
    }

    _getRutEncode(url) {
        let rut = null;
        if (url.includes('?') && url.includes('action') && url.includes('rut') && url.includes('client')) {
            rut = url.split('?')[2].split('=')[1];
        }
        return rut;
    }

    _getClientEncode(url) {
        let client = null;
        if (url.includes('?') && url.includes('action') && url.includes('rut') && url.includes('client')) {
            client = url.split('?')[3].split('=')[1];
        }
        return client;
    }

    render() {
        return (
            <div className="container h-100 d-flex flex-column">
                <div className="d-flex justify-content-center h-100">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>Habilitar Usuario</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group form-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input name="currentPassword" type="password" className="form-control" placeholder="Contraseña Actual" onChange={this.handleInput}></input>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group form-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input name="newPassword" type="password" className="form-control" placeholder="Nueva Contraseña" onChange={this.handleInput}></input>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="input-group form-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input name="confirmNewPassword" type="password" className="form-control" placeholder="Confirme Contraseña" onChange={this.handleInput}></input>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col text-right">
                                    <input type="submit" value="Enviar" className="btn btn-default"></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnableUser;