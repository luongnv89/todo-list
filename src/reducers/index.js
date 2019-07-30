import { combineReducers } from 'redux';
import todos from './todos';
import sortTodos from './sortTodos';
import status from './clientStorage';

export default combineReducers({ todos, sortTodos, status });
