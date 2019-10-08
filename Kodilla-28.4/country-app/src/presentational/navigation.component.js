import React from 'react';
import { Link, IndexLink } from 'react-router';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../country.css';

const Navigation = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <IndexLink className="navbar-brand" to="/">
          Państwa.js
        </IndexLink>

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
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active bg-info text-light" to="/countries">
                Countries
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active bg-info text-light" to="/continents">
                Continents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active bg-info text-light" to="/contact">
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
