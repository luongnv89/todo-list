import { connect } from 'react-redux';
import Footer from '../components/TodoFilter';

const mapStateToProps = (state, ownProps) => {
  return {
    total: state.todos.length,
    totalActive: state.todos.filter((t) => !t.completed).length,
    totalCompleted: state.todos.filter((t) => t.completed).length,
    filter: ownProps.filter,
  };
};

const TodoCounting = connect(mapStateToProps)(Footer);

export default TodoCounting;
