import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from './reducers';
import rootSaga from './sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/* jshint ignore:start */
const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
});

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(loggerMiddleware, sagaMiddleware)));
// run the saga
sagaMiddleware.run(rootSaga);

export default store;