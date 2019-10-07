import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../country.css';

const Navigation = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          Państwa.js
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li classname="nav-item" activeClassName="active">
              <Link className="nav-link" to="/countries">
                Countries
              </Link>
            </li>
            <li classname="nav-item" activeClassName="active">
              <Link className="nav-link" to="/continents">
                Continents
              </Link>
            </li>
            <li classname="nav-item" activeClassName="active">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">{props.children}</div>
    </div>
  );
};

export default Navigation;
