import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeAllTodos, fetchTodoRequest, saveTodoRequest } from '../actions';
/* jshint ignore:start */
let AddTodo = ({ todos, dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <div className="form-group">
          <input
            className="form-control"
            ref={(node) => {
              input = node;
            }}
            placeholder="Enter task name"
          />
        </div>
        <button type="submit" className="btn btn-success btn-small">
          <i className="fas fa-plus"/> Add Todo
        </button>
        <button
          type="button"
          className="btn btn-danger btn-small btnTodo"
          onClick={() => dispatch(removeAllTodos())}
        >
          <i className="fas fa-eraser"/> Clear All
        </button>
        <button
          type="button"
          className="btn btn-info btn-small btnTodo"
          onClick={() => dispatch(fetchTodoRequest())}
        >
          <i className="fas fa-upload"/> Load From Browser
        </button>
        <button
          type="button"
          className="btn btn-info btn-small btnTodo"
          onClick={() => dispatch(saveTodoRequest(todos))}
        >
          <i className="fas fa-download"/> Save To Browser
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

AddTodo = connect(mapStateToProps)(AddTodo);
export default AddTodo;
