import React, { Component } from 'react';
import '../../App.css';


class ChangePassword extends Component {
    constructor() {
        super();
        this.state = {
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
    }

    handleSubmit(e) {
        let me = this;
        e.preventDefault();
        if (!me.validateForm(me.state)) {
            return null;
        }
        
    }

    validateForm(state) {
        let isValid = true;
        if (state.currentPassword === "" && state.currentPassword === "") {
            alert('Debe Completar el formulario');
            isValid = false;
        }
        return isValid;
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
                                <div className="input-group form-group input-group-alternative">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input name="newPassword" type="password" className="form-control" placeholder="Nueva Contraseña"></input>
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
                                    <input type="password" className="form-control" placeholder="Confirme Contraseña"></input>
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
                                <div className="col text-left">
                                    <input type="submit" value="Cancelar" className="btn btn-outline-secondary"></input>
                                </div>
                                <div className="col text-right">
                                    <input type="submit"  name="confirmNewPassword" value="Cambiar" className="btn btn-default"></input>
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
