import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  DELETE_COUNTRY,
  SET_CONTINENT,
  GET_DATA_REQUESTED,
  GET_DATA_DONE,
  GET_DATA_FAILED
} from '../actions/actionTypes';
import countriesData from '../data/countries.json';

const initialState = {
  countries: countriesData,
  selectedCountry: {},
  visibleCountries: []
};

const countriesReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return Object.assign({}, state, { countries: state.countries });
    case GET_COUNTRY:
      const selectedCountry = state.countries.find(country => country.id === parseInt(action.id));
      return Object.assign({}, state, { selectedCountry });
    case SEARCH_COUNTRIES:
      const foundCountries = state.countries.filter(country =>
        country.name.toLowerCase().includes(action.searchText.toLowerCase())
      );
      return Object.assign({}, state, { visibleCountries: foundCountries });
    case DELETE_COUNTRY:
      const notDeletedCountries = state.countries.filter(country => country.id !== action.id);
      const notDeletedVisibleCountries = state.countries.filter(country => country.id !== action.id);
      return Object.assign({}, state, { countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries });
    case SET_CONTINENT:
      const continentCountries = state.countries.filter(country => country.continent === action.continentName);
      return Object.assign({}, state, { visibleCountries: continentCountries });
    case GET_DATA_REQUESTED:
      return { ...state, isLoading: true };
    case GET_DATA_DONE:
      return { ...state, isLoading: false, countries: action.countries };
    case GET_DATA_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default countriesReducer;
