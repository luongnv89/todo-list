import { connect } from 'react-redux';
import { toggleTodo, removeTodo, sortTodos } from '../actions';
import TodoList from '../components/TodoList';
import { sortTodoList } from '../selectors';

const getVisibilityFilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibilityFilter(sortTodoList(state), ownProps.filter),
    sortTodos: state.sortTodos,
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
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
