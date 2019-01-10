import React from "react";

const TodoForm = props => {
  return (
    <form>
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
