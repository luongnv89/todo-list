import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Map } from 'immutable';
import todoApp from './reducers';
/* jshint ignore:start */
const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
});

const initialStoreState = Map();

export default createStore(todoApp, initialStoreState, composeWithDevTools(applyMiddleware(loggerMiddleware)));