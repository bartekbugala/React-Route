import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/actionsCountries';
import CountryFlagList from '../presentational/flagList.component';

class ContinentsContainer extends Component {
  chooseContinent(event) {
    this.props.dispatch(setContinent(event.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  componentDidMount() {
    this.props.dispatch(setContinent('Europe'));
  }

  render() {
    return (
      <div>
        <select onChange={e => this.chooseContinent(e)}>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">Americas</option>
          <option value="Polar">Polar</option>
        </select>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(ContinentsContainer);
