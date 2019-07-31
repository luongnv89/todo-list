import React from 'react';
import PropTypes from 'prop-types';
/* jshint ignore:start */
const Todo = ({ toggleTodo, removeTodo, completed, text, id, createdAt }) => (
  <tr>
    <th onClick={() => toggleTodo(id)} className={`${ completed ? 'todoCompleted' : ''}`}>
      <span>
        {text}
      </span>
      <br/>
      <span
        style={{ fontSize:'0.7em' }}
      >
        {(new Date(createdAt)).toLocaleString()}
      </span>
    </th>
    <th>
      <button onClick={() => removeTodo(id)} className="btn btnTodo btn-sm">
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
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
};

export default Todo;
