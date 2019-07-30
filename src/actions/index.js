import { createAction } from 'redux-act';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const addTodo = createAction('ADD_TODO');
export const removeTodo = createAction('REMOVE_TODO');
export const removeAllTodos = createAction('REMOVE_ALL_TODOS');
export const toggleTodo = createAction('TOGGLE_TODO');
export const sortTodos = createAction('SORT_TODOS');
// Offline - first
export const fetchTodoRequest = createAction('FETCH_TODO_REQUEST');
export const fetchTodoReceived = createAction('FETCH_TODO_RECEIVED');
export const fetchTodoFailed = createAction('FETCH_TODO_FAILED');

export const saveTodoRequest = createAction('SAVE_TODO_REQUEST');
export const saveTodoReceived = createAction('SAVE_TODO_RECEIVED');
export const saveTodoFailed = createAction('SAVE_TODO_FAILED');
