import React from 'react';
import PropTypes from 'prop-types';
/* jshint ignore:start */
const Todo = ({ toggleTodo, removeTodo, completed, text, createdAt, index }) => (
  <tr>
    <th scope="row">{index}</th>
    <th onClick={toggleTodo}>
      <span
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        className={`text-${completed ? 'danger' : 'success'}`}
      >
        {text}
      </span>
    </th>
    <th>
      <span
        className="text-secondary"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {(new Date(createdAt)).toLocaleString()}
      </span>
    </th>
    <th>
      <button onClick={removeTodo} className="btn btn-outline-danger btn-small">
        <i className="fas fa-trash" />
      </button>
    </th>
  </tr>
);

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
};

export default Todo;
