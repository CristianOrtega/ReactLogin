import React, { Component } from 'react';
import './PageNotFound.css';


class PageNotFound extends Component {
    render() {
        return (
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            {/* <span className="display-1 d-block">404</span> */}
                            <div className="mb-3 lead">No sucede mucho, pero la página no fue encontrada</div>
                            <input type="submit" value="Volver" className="btn btn-outline-secondary mb-4"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;