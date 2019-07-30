import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeAllTodos, saveTodoRequest } from '../actions';
/* jshint ignore:start */
let AddTodo = ({ dispatch }) => {
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
            placeholder="What do you want to do"
          />
        </div>
        <button type="submit" className="btn btn-sm btnTodo">
          <i className="fas fa-plus"/> Add Todo
        </button>
        <button
          type="button"
          className="btn btn-sm btnTodo"
          onClick={() => dispatch(removeAllTodos())}
        >
          <i className="fas fa-eraser"/> Clear All
        </button>
        <button
          type="button"
          className="btn btn-sm btnTodo"
          onClick={() => dispatch(saveTodoRequest())}
        >
          <i className="fas fa-download"/> Save
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);
export default AddTodo;
