import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state) => {
  return {
    total: state.todos.length,
    totalActive: state.todos.filter((t) => !t.completed).length,
    totalCompleted: state.todos.filter((t) => t.completed).length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
  }
}

const TodoCounting = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default TodoCounting;
