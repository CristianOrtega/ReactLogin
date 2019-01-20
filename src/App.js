import React, { Component } from 'react';
import logo from './logo.svg';
import EnableUser from './components/enableuser/EnableUser';
import ChangePassword from './components/changepassword/ChangePassword';
import PageNotFound from './components/error/PageNotFound';
import './App.css';

class App extends Component {
  render() {

    let navigatorUrl = document.URL;
    let action = navigatorUrl.split('?')[1].split('&')[0].split('=')[1];
    if (action === 'enable') {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <EnableUser />
        </div >
      );
    } else if (action === 'changePassword') {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <ChangePassword />
        </div >
      );
    } else {
      return (
        <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <PageNotFound />
        </div >
      );
    }
  }
}

export default App;
