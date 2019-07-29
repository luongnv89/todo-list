import { createReducer } from "redux-act";
import { addTodo, removeTodo, toggleTodo, removeAllTodos } from "../actions";

const initialState = [];

export default createReducer(
  {
    [addTodo]: (todos, text) => [...todos, { text: text, completed: false }],
    [removeTodo]: (todos, id) => todos.filter((t, index) => id !== index),
    [removeAllTodos]: todos => [],
    [toggleTodo]: (todos, id) =>
      todos.map((todo, index) => {
        if (index === id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      })
  },
  initialState
);
