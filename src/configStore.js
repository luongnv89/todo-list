import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from './reducers';
import rootSaga from './sagas';
import { fetchTodoRequest, saveTodoRequest, changeHeaderMessage } from './actions';
import { getRandomHeaderMessage } from './utils';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/* jshint ignore:start */
const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
});

// middleware
const autoSaveTodo = (store) => (next) => (action) => {
  switch(action.type) {
    case 'ADD_TODO':
    case 'REMOVE_TODO':
    case 'TOGGLE_TODO':
    case 'REMOVE_ALL_TODOS':
      setTimeout(() => {
        store.dispatch(saveTodoRequest());
        store.dispatch(changeHeaderMessage(getRandomHeaderMessage()));
      }, 500);
      return next(action);
    default:
      return next(action);
  }
}

const middlewares = [sagaMiddleware, autoSaveTodo];
let composedEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  middlewares.push(loggerMiddleware);
  composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));
} else {
  composedEnhancers = applyMiddleware(...middlewares);
}
const store = createStore(allReducers, composedEnhancers);
// run the saga
sagaMiddleware.run(rootSaga);
store.dispatch(fetchTodoRequest());
export default store;