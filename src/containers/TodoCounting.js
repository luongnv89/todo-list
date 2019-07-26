import { connect } from 'react-redux';
import Footer from '../components/Footer';

const mapStateToProps = state => {
  return {
    total: state.todos.length,
    totalActive: state.todos.filter(t => !t.completed).length,
    totalCompleted: state.todos.filter(t => t.completed).length,
  }
}

const TodoCounting = connect(mapStateToProps)(Footer);

export default TodoCounting;