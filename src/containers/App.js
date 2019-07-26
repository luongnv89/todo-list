import React from "react";
import "../App.css";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoCounting from "./TodoCounting";

const App = ({match: {params}}) => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'}/>
    <TodoCounting />
  </div>
);
export default App;
