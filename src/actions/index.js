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