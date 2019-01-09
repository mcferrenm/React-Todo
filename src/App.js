import React from "react";

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
        <ul>
          {this.state.todosData.map(todo => {
            return <li>{todo.task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
