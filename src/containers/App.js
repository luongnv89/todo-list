import React from 'react';
import '../App.css';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import TodoCounting from './TodoCounting';
/* jshint ignore:start */
const App = ({ match: { params } }) => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <TodoCounting />
  </div>
);
export default App;
