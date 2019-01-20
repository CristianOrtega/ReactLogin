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
        alert('Enviando...');
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
                <div className="d-flex justify-content-center h-100">
                    <div className="card-changepassword">
                        <div className="card-header">
                            <h3>Cambiar Contraseña</h3>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input name="newPassword" type="password" className="form-control" placeholder="Nueva Contraseña"></input>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Confirme Contraseña"></input>
                                    </div>
                                    <div className="form-group">
                                        <input name="confirmNewPassword" type="submit" value="Cambiar" className="btn float-right login_btn"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;