import {
  GET_COUNTRIES,
  GET_COUNTRY,
  DELETE_COUNTRY,
  SEARCH_COUNTRIES,
  SET_CONTINENT,
  FETCH_COUNTRIES
} from './actionTypes';

export function getCountries() {
  return {
    type: GET_COUNTRIES
  };
}

export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  };
}

export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  };
}

export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  };
}

export function setContinent(continentName) {
  return {
    type: SET_CONTINENT,
    continentName
  };
}

export function fetchedCountries(countries) {
  return {
    type: FETCH_COUNTRIES,
    countries
  };
}

export function fetchCountries() {
  return dispatch => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name;currencies;population;capital;region;flag')
      .then(response => response.json())
      .then(countries => {
        let countriesRemapped = countries.map((country, i) => {
          return {
            name: country.name,
            currency: country.currencies[0].code,
            populace: country.population / 1000000,
            capital: country.capital,
            continent: country.region,
            imageUrl: country.flag,
            id: i
          };
        });
        // set state with fetched countries
        dispatch(fetchedCountries(countriesRemapped));
      })
      .catch(error => {
        // console.log error
        dispatch(console.log(error));
      });
  };
}
