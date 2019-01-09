import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {props.todosData.map(todo => {
        return <Todo todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
