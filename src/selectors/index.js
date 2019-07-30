import { createSelector } from 'reselect';

const orderList = (state) => state.sortTodos;

export const getTodos = (state) => state.todos;

export const sortTodoList =  createSelector(
  [orderList, getTodos],
  (order, todos) => {
    if (order) {
      console.log('Going to order: ', order);
      return [...todos].sort((a,b) => (b.createdAt - a.createdAt));
    } else {
      console.log('Going to order (2): ', order);
      return [...todos].sort((a,b) => (a.createdAt - b.createdAt));
    }
  }
);