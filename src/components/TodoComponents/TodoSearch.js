import React from "react";

import "./Todo.css";

const TodoSearch = props => {
  return (
    <input
      name="searchInputText"
      onChange={props.handleFilterList}
      type="text"
      placeholder="Search todos"
    />
  );
};

export default TodoSearch;
