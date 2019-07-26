import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import TodoCounting from './containers/TodoCounting';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <TodoCounting />
    </div>
  );
}

export default App;
