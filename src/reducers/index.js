import { combineReducers } from 'redux';
import todos from './todos';
import sortTodos from './sortTodos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({ todos, sortTodos, visibilityFilter });
