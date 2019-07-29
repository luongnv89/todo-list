import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import todoApp from "./reducers";
import Root from "./containers/Root";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const loggerMiddleware = createLogger({
  duration: true,
  collapsed: true,
});
const store = createStore(todoApp, applyMiddleware(loggerMiddleware));

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
