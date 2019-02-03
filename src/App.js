import React, { Component } from 'react';
import logo from './logo.svg';
import notFound from './404.png';
import EnableUser from './components/enableuser/EnableUser';
import ChangePassword from './components/changepassword/ChangePassword';
import PageNotFound from './components/error/PageNotFound';
import Loading from './components/loading/Loading';
import './App.css';

class App extends Component {

  _getUrl(navigatorUrl) {
    let action = '';
    if (navigatorUrl.includes('?') && navigatorUrl.includes('action') && navigatorUrl.includes('rut') && navigatorUrl.includes('client')) {
      action = navigatorUrl.split('?')[1].split('&')[0].split('=')[1];
    }
    return action;
  }

  render() {
    let action = this._getUrl(document.URL);
    if (action === 'enable') {
      return (
        <div className="App bg-gradient-primary pt-4p">
          <img src={logo} className="App-logo mt-2 mb-2" alt="logo" />
          <EnableUser />
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
          </svg>
          <div className="fixed-bottom pb-4">
              <h6 className="text-center text-white-50">Footer</h6>
          </div>
        </div >
      );
    } else if (action === 'changePassword') {
      return (
        <div className="App bg-gradient-primary pt-4p">
          <img src={logo} className="App-logo mt-2 mb-2" alt="logo" />
          <ChangePassword />
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
          </svg>
          <div className="fixed-bottom pb-4">
              <h6 className="text-center text-white-50">Footer</h6>
          </div>
        </div >
      );
    } else if (action === 'cargando') {
      return (
          <Loading />
      );
    } else {
      return (
        <div className="App bg-gradient-primary pt-4p">
          <img src={logo} className="App-logo mt-2 mb-2" alt="logo" />
          <img src={notFound} className="notFound mt-2 mb-2" alt="404" />
          <PageNotFound />
          <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
          </svg>
          <div className="fixed-bottom pb-4">
              <h6 className="text-center text-white-50">Footer</h6>
          </div>
        </div >
      );
    }
  }
}

export default App;
