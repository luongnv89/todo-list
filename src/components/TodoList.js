import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
/* jshint ignore:start */
const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <div className="card" style={{ marginTop: '30px' }}>
    <div className="card-body">
      <table className="table table-borderless">
        <tbody>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      createdAt: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  sortTodos: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  changeTodoOrder: PropTypes.func.isRequired,
};

export default TodoList;
