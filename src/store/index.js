import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
/* import DevTools from '../DevTools'; */
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk) /* , DevTools.instrument() */);

export default store;
