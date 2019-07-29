import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
/* jshint ignore:start */
const TodoList = ({ todos, toggleTodo, removeTodo, changeTodoOrder }) => (
  <div className="card" style={{ marginTop: '30px' }}>
    <div className="card-header">Todo List</div>
    <div className="card-body table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col" onClick={changeTodoOrder}>
              Created Time
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              {...todo}
              toggleTodo={() => toggleTodo(index)}
              removeTodo={() => removeTodo(index)}
              index={index}
            />
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
