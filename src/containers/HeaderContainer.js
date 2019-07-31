import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => {
  return {
    message: state.headerMessage,
  };
};

const TodoCounting = connect(mapStateToProps)(Header);

export default TodoCounting;
