import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {props.todosData
        .filter(todo => todo.task.includes(props.searchInputText))
        .map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCompleted={props.toggleCompleted}
            />
          );
        })}
    </ul>
  );
};

export default TodoList;
