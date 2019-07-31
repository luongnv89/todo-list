import React from 'react';
import '../App.css';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import TodoCounting from './TodoCounting';
import Footer from '../components/Footer';
import HeaderContainer from '../containers/HeaderContainer';
/* jshint ignore:start */
const Layout = ({ match: { params } }) => (
  <div className="TodoApp">
    <HeaderContainer />
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <TodoCounting />
    <Footer />
  </div>
);
export default Layout;
