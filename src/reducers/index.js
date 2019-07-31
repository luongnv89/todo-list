import { combineReducers } from 'redux';
import todos from './todos';
import sortTodos from './sortTodos';
import status from './clientStorage';
import headerMessage from './headerMessage';

export default combineReducers({ todos, sortTodos, status, headerMessage});
