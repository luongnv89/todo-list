import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoApp from './reducers';
import rootSaga from './sagas';
import { fetchTodoRequest, saveTodoRequest } from './actions';
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
    case 'REMOVE_ALL_TODO':
      setTimeout(() => {
        store.dispatch(saveTodoRequest());
      }, 1000);
      break;
  }
  next(action);
}

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(loggerMiddleware, sagaMiddleware, autoSaveTodo)));
// run the saga
sagaMiddleware.run(rootSaga);
store.dispatch(fetchTodoRequest());
export default store;