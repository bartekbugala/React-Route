import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actionsCountries';
import CountryDetails from '../presentational/countryDetails.component';

class CountryDetailsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCountry(this.props.params.id));
  }

  render() {
    return <CountryDetails country={this.props.selectedCountry} />;
  }
}

const mapStateToProps = function(store) {
  return {
    selectedCountry: store.countriesReducer.selectedCountry
  };
};

export default connect(mapStateToProps)(CountryDetailsContainer);
