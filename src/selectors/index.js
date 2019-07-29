import { createSelector } from 'reselect';

const orderList = (state) => state.sortTodos;

const getFilter = (state) => state.visibilityFilter;

const getTodos = (state) => state.todos;

const getVisibilityFilter = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
    console.log('Going to filter:', filter);
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  }
);

const sortTodoList =  createSelector(
  [orderList, getVisibilityFilter],
  (order, todos) => {
    if (order) {
      console.log('Going to order: ', order);
      return todos.sort((a,b) => (b.createdAt - a.createdAt));
    } else {
      console.log('Going to order (2): ', order);
      return todos.sort((a,b) => (a.createdAt - b.createdAt));
    }
  }
);

export default sortTodoList;