import React from "react";

const Todo = props => {
  return <li onClick={props.toggleCompleted}>{props.todo.task}</li>;
};

export default Todo;
