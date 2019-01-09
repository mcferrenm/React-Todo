import React from "react";

const Todo = props => {
  return (
    <li id={props.todo.id} onClick={props.toggleCompleted}>
      {props.todo.task}
    </li>
  );
};

export default Todo;
