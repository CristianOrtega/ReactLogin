import React, { Component } from 'react';
import './PageNotFound.css';


class PageNotFound extends Component {
    render() {
        return (
            <div className="page-wrap d-flex flex-row align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div className="mb-3 lead">No sucede mucho, pero la página no fue encontrada</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound;