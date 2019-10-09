import {
  GET_COUNTRIES,
  GET_COUNTRY,
  DELETE_COUNTRY,
  SEARCH_COUNTRIES,
  SET_CONTINENT
  /* FETCH_COUNTRIES */
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
////////////////////////////////////////////////////////////
export function getDataRequested() {
  return {
    type: 'GET_DATA_REQUESTED'
  };
}

export function getDataDone(countries) {
  return {
    type: 'GET_DATA_DONE',
    countries
  };
}

export function getDataFailed(error) {
  return {
    type: 'GET_DATA_FAILED',
    payload: error
  };
}

export function getData() {
  return dispatch => {
    // set state to "loading"
    dispatch(getDataRequested());

    fetch('https://restcountries.eu/rest/v2/all?fields=name;currencies;population;capital;region;flag')
      .then(response => response.json())
      .then(countries => {
        // set state for success
        dispatch(getDataDone(countries));
      })
      .catch(error => {
        // set state for error
        dispatch(getDataFailed(error));
      });
  };
}

/*function getCountries() {
    const restCountriesUrl =
    'https://restcountries.eu/rest/v2/all?fields=name;currencies;population;capital;region;flag';

  let restCountriesData = [];
  let restCountriesData2 = [];

  fetch(restCountriesUrl)
    .then(response => response.json())
    .then(result => {
      restCountriesData = [...result];

      restCountriesData2 = restCountriesData.map((country, i) => {
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
      console.dir(restCountriesData2);
      return restCountriesData2;
    });
}*/
