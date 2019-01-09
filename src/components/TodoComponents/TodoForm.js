import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="Add todo"
        value={props.inputText}
        onChange={props.handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
