import React from "react";

import "./Todo.css";

const Todo = props => {
  const lineThrough = props.todo.completed
    ? { textDecoration: "line-through", color: "#9E9E9E" }
    : null;

  return (
    <li
      className="todo"
      style={lineThrough}
      id={props.todo.id}
      onClick={props.toggleCompleted}
    >
      {props.todo.task}
    </li>
  );
};

export default Todo;
