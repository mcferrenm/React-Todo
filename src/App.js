import React from "react";

import TodoList from "./components/TodoComponents/TodoList";

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosData: todos
    };
  }
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todosData={this.state.todosData} />
      </div>
    );
  }
}

export default App;
