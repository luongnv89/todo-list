import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import todoApp from './reducers';
import Root from './containers/Root';
import './index.css';
import * as serviceWorker from './serviceWorker';
/* jshint ignore:start */
const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
});

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(loggerMiddleware)));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
