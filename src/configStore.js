import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from './reducers';
/* jshint ignore:start */
const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
});

export default createStore(todoApp, composeWithDevTools(applyMiddleware(loggerMiddleware)));