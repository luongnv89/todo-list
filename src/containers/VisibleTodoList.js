import { connect } from 'react-redux';
import { toggleTodo, removeTodo, sortTodos } from '../actions';
import TodoList from '../components/TodoList';
import sortTodoList from '../selectors';

const mapStateToProps = (state) => {
  return {
    todos: sortTodoList(state),
    sortTodos: state.sortTodos,
    visibilityFilter: state.visibilityFilter,
  };
};
/* jshint ignore:start */
const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id));
    },
    changeTodoOrder: () => {
      dispatch(sortTodos());
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
