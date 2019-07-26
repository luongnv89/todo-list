import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeAllTodos } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = ''
        }}
      >
        <div className="form-group">
          <input
            className="form-control"
            ref={node => {
              input = node
            }}
            placeholder="Enter task name"
          />
        </div>
        <button
          type="submit"
          className="btn btn-success btn-small"
        >
          Add Todo
        </button>
        <button
          type="button"
          className="btn btn-danger btn-small"
          style={{marginLeft:'20px'}}
          onClick={() => dispatch(removeAllTodos())}
        >
          Clear All
        </button>
      </form>
    </div>
  );
}

AddTodo = connect()(AddTodo);
export default AddTodo;