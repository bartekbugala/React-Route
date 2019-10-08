import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';

const CountryFlagList = props => (
  <div className="countries-list">
    {props.countries.map(country => {
      return (
        <div className="single-country" key={country.id}>
          <button className="delete-country" onClick={props.deleteCountry.bind(null, country.id)}>
            X
          </button>
          <Link className="logo" to={'countries/country/' + country.id}>
            <CountryFlag country={country} />
          </Link>
        </div>
      );
    })}
  </div>
);

export default CountryFlagList;
