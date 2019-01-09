import React from "react";

const TodoList = props => {
  return (
    <ul>
      {props.todosData.map(todo => {
        return <li>{todo.task}</li>;
      })}
    </ul>
  );
};

export default TodoList;
