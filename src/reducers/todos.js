import { createReducer } from 'redux-act';
import { addTodo, removeTodo, toggleTodo, removeAllTodos, fetchTodoReceived } from '../actions';
import produce from 'immer';

const initialState = [];
/* jshint ignore:start */
export default createReducer(
  {
    [fetchTodoReceived]: produce((draft, todoFromCS) => todoFromCS ),
    [addTodo]: produce((draft, text) => {
      draft.push({ id: draft.length, text, completed: false, createdAt: Date.now() });
    }),
    [removeTodo]: (todos, id) => todos.filter((t) => id !== t.id),
    [removeAllTodos]: (todos) => [],
    [toggleTodo]: produce((draft, id) => {
      draft.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
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
