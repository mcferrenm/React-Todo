import React from "react";

import "./Todo.css";

const TodoForm = props => {
  return (
    <form className="form">
      <input
        type="text"
        placeholder="Add todo"
        value={props.inputText}
        onChange={props.handleChange}
        name="inputText"
      />
      <button onClick={props.setNewTodoItem}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
