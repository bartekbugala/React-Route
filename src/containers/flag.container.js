import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flagList.component';
import { getCountries } from '../actions/actionsCountries';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCountries());
  }

  render() {
    return (
      <div>
        <CountryFlagList countries={this.props.countries} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.countries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);