import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { getCountries } from './actions/actionsCountries'
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <div>
            <h1>App</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());
