import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import routes from './routes';

//import { getCountries } from './actions/actionsCountries';
//import DevTools from './DevTools';
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
    {/*<DevTools />*/}
  </Provider>,
  document.getElementById('root')
);

//store.dispatch(getCountries());
