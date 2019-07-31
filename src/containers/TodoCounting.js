import { connect } from 'react-redux';
import TodoFilter from '../components/TodoFilter';

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.todos.length,
    totalActive: state.todos.filter((t) => !t.completed).length,
    totalCompleted: state.todos.filter((t) => t.completed).length,
    filter: ownProps.filter,
  };
};

const TodoCounting = connect(mapStateToProps)(TodoFilter);

export default TodoCounting;
