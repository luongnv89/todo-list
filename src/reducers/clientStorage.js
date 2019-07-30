import { createReducer } from 'redux-act';
import {
  fetchTodoReceived,
  fetchTodoRequest,
  fetchTodoFailed,
  saveTodoReceived,
  saveTodoRequest,
  saveTodoFailed,
} from '../actions';

const initialState = {
  fetching: false,
  saving: false,
  error: null,
};
/* jshint ignore:start */
export default createReducer(
  {
    [fetchTodoReceived]: (state) => ({ fetching: false }),
    [fetchTodoRequest]: (state) => ({ fetching: true }),
    [fetchTodoFailed]: (state, error) => ({ error }),
    [saveTodoReceived]: (state) => ({ saving: false }),
    [saveTodoRequest]: (state) => ({ saving: true }),
    [saveTodoFailed]: (state, error) => ({ error }),
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
