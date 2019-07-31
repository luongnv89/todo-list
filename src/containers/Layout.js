import React from 'react';
import '../App.css';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import TodoCounting from './TodoCounting';
import Footer from '../components/Footer';
import Header from '../components/Header';
/* jshint ignore:start */
const Layout = ({ match: { params } }) => (
  <div className="TodoApp">
    <Header />
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <TodoCounting />
    <Footer />
  </div>
);
export default Layout;
