import React from "react";

import "./Todo.css";

const TodoSearch = props => {
  return (
    <input
      name="searchInputText"
      type="text"
      placeholder="Search todos"
      onChange={props.handleChange}
    />
  );
};

export default TodoSearch;
