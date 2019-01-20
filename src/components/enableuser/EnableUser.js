import React, { Component } from 'react';
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
        e.preventDefault();
        if (!me.validateForm(me.state)) {
            return null;
        }
        alert('Enviando...');
    }

    validateForm(state) {
        let isValid = true;
        if (state.currentPassword === "" && state.currentPassword === "" && state.currentPassword === "") {
            alert('Debe Completar el formulario');
            isValid = false;
        }
        return isValid;
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Habilitar Usuario</h3>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input name="currentPassword" type="password" className="form-control" placeholder="Contraseña Actual" onChange={this.handleInput}></input>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input name="newPassword" type="password" className="form-control" placeholder="Nueva Contraseña" onChange={this.handleInput}></input>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input name="confirmNewPassword" type="password" className="form-control" placeholder="Confirme Contraseña" onChange={this.handleInput}></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Enviar" className="btn float-right login_btn"></input>
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

export default EnableUser;