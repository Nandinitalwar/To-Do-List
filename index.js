import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";

//ReactDOM.render(<TodoList/>,document.querySelector('#container'));
ReactDOM.render(<TodoList/>,document.getElementById('root'));
//ReactDOM.render(React.createElement(<TodoList/>), document.getElementById('root'));
