import React, { Component } from 'react';
import '../../App.css';


class ChangePassword extends Component {
    constructor() {
        super();
        this.state = {
            newPassword: '',
            confirmNewPassword: '',
            errorNewPassword: '',
            errorConfirmNewPassword: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showPassword = this.showPassword.bind(this);
    }

    /* NewPassword */
    handleNewPassword = event => {
        this.setState({ newPassword: event.target.value }, () => {
            this.validateNewPassword();
        });
    };

    validateNewPassword = () => {
        const { newPassword } = this.state;
        this.setState({
            errorNewPassword:
                newPassword.length >= 6 ? null : 'La nueva contraseña debe tener 6 o más caracteres'
        });
    }
    /* ConfirmNewPassword */
    handleConfirmNewPassword = event => {
        this.setState({ confirmNewPassword: event.target.value }, () => {
            this.validateConfirmNewPassword();
        });
    };

    validateConfirmNewPassword = () => {
        const { confirmNewPassword } = this.state;
        const { newPassword } = this.state;
        this.setState({
            errorConfirmNewPassword:
                newPassword === confirmNewPassword ? null : 'La confirmación no coincide con la nueva contraseña'
        });
    }

    showPassword(btn) {
        let element = null;
        if (btn.currentTarget.id === 'showCurrentPassword') {
            element = document.getElementById("currentPassword");
        } else if (btn.currentTarget.id === 'showNewPassword') {
            element = document.getElementById("newPassword");
        } else {
            element = document.getElementById("confirmNewPassword");
        }
        if (element.type === "password") {
            element.type = "text";
        } else {
            element.type = "password";
        }
    }

    validateForm(state) {
        let isValid = true;
        if (state.newPassword === "" && state.confirmNewPassword === "") {
            alert('Debe Completar el formulario');
            isValid = false;
        }
        return isValid;
    }

    handleSubmit(e) {
        let me = this;
        let rut = me._getRutEncode(document.URL);
        let client = me._getClientEncode(document.URL);
        e.preventDefault();
        if (!me.validateForm(me.state)) {
            return null;
        }
        let data = {
            userName: rut,
            password: me.state.confirmNewPassword,
            company: client
        };
        me._sendRequest(data);
    }

    _sendRequest(data) {
        fetch('ruta del servicio', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data)
        }).then((response) => {
            let clone = response.clone();
            return clone.json();
        }).then((recurso) => {
            if (recurso) {
                //venta redireccionando
                window.location = 'http://www.clavesistemas.cl:8084/AGM/#';
            } else {
                // ventana error 
            }
        }).catch((error) => {
            alert('Hubo un error al conectarse con el servidor.');
        })
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
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>Cambiar Contraseña</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className={`input-group form-group input-group-alternative mt-4 ${this.state.errorNewPassword ? 'is-invalid' : ''}`}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input id="newPassword"
                                        name="newPassword"
                                        type="password"
                                        className="form-control"
                                        placeholder="Nueva Contraseña"
                                        value={this.state.newPassword}
                                        onChange={this.handleNewPassword}
                                        onBlur={this.validateNewPassword}>
                                    </input>
                                    <div className="input-group-append">
                                        <button id="showNewPassword" className="btn btn-outline-secondary" type="button" onClick={this.showPassword}>
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </div>
                                    <div className='invalid-feedback'>{this.state.errorNewPassword}</div>
                                </div>
                                <div className={`input-group form-group input-group-alternative mt-4 ${this.state.errorConfirmNewPassword ? 'is-invalid' : ''}`}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input id="confirmNewPassword"
                                        name="confirmNewPassword"
                                        type="password"
                                        className="form-control"
                                        placeholder="Confirme Contraseña"
                                        value={this.state.confirmNewPassword}
                                        onChange={this.handleConfirmNewPassword}
                                        onBlur={this.validateConfirmNewPassword}>
                                    </input>
                                    <div className="input-group-append">
                                        <button id="showConfirmNewPassword" className="btn btn-outline-secondary" type="button" onClick={this.showPassword}>
                                            <i className="fas fa-eye"></i>
                                        </button>
                                    </div>
                                    <div className='invalid-feedback'>{this.state.errorConfirmNewPassword}</div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col text-right">
                                    <input type="submit" name="confirmNewPassword" value="Cambiar" className="btn btn-default" onClick={this.handleSubmit}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ChangePassword;