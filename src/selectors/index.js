import { createSelector } from 'reselect';

const orderList = (state) => state.sortTodos;

export const getTodos = (state) => state.todos;

export const sortTodoList =  createSelector(
  [orderList, getTodos],
  (order, todos) => {
    if (!order) {
      return [...todos].sort((a,b) => (b.completed - a.completed));
    } else {
      return [...todos].sort((a,b) => (a.completed - b.completed));
    }
  }
);