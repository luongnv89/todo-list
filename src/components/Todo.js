import React from "react";
import PropTypes from "prop-types";

const Todo = ({ toggleTodo, removeTodo, completed, text, index }) => (
  <tr>
    <th scope="row">{index}</th>
    <th onClick={toggleTodo}>
      <span
        style={{ textDecoration: completed ? "line-through" : 'none' }}
        className={`text-${completed ? 'danger':'success'}`}
      >
        {text}
      </span>
    </th>
    <th>
      <button
        onClick={removeTodo}
        className="btn btn-outline-danger btn-small"
      >
        <i
          className="fas fa-trash"
        />
      </button>
    </th>
  </tr>
);

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
