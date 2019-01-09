import React from "react";

const Todo = props => {
  const lineThrough = props.todo.completed
    ? { textDecoration: "line-through" }
    : null;

  return (
    <li style={lineThrough} id={props.todo.id} onClick={props.toggleCompleted}>
      {props.todo.task}
    </li>
  );
};

export default Todo;
