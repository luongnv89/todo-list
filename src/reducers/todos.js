import { createReducer } from 'redux-act';
import { addTodo, removeTodo, toggleTodo, removeAllTodos, sortTodos } from '../actions';

const initialState = [];
/* jshint ignore:start */
export default createReducer(
  {
    [addTodo]: (todos, text) => [...todos, { text: text, completed: false, createdAt: Date.now() }],
    [removeTodo]: (todos, id) => todos.filter((t, index) => id !== index),
    [removeAllTodos]: (todos) => [],
    [toggleTodo]: (todos, id) =>
      todos.map((todo, index) => {
        if (index === id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      }),
  },
  initialState,
);

// export default createReducer((on, off) => {
//   on(addTodo, (todos, text) => [...todos, { text: text, completed: false }]);
//   on(removeTodo, (todos, id) => todos.filter((t, index) => id !== index));
//   on(removeAllTodos,todos => []);
//   on(toggleTodo, (todos, id) =>
//       todos.map((todo, index) => {
//         if (index === id) {
//           return Object.assign({}, todo, {
//             completed: !todo.completed
//           });
//         }
//         return todo;
//       }));
// }, initialState);
