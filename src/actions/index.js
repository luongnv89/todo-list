const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

const addTodo = (text) => ({
  type: 'ADD_TODO',
  text,
});

const removeTodo = (index) => ({
  type: 'REMOVE_TODO',
  index,
});

const removeAllTodos = () => ({
  type: 'REMOVE_ALL_TODOS',
});

const toggleTodo = (index) => ({
  type: 'TOGGLE_TODO',
  index,
});

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

module.exports = {
  setVisibilityFilter,
  addTodo,
  removeTodo,
  toggleTodo,
  VisibilityFilters,
  removeAllTodos,
};