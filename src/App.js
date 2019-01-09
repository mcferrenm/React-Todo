import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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
      todosData: todos,
      inputText: ""
    };
  }

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  setNewTodoItem = event => {
    event.preventDefault();
    this.setState({
      todosData: [
        ...this.state.todosData,
        {
          task: this.state.inputText,
          id: Math.floor(Math.random() * 10 ** 13),
          completed: false
        }
      ],
      inputText: ""
    });
  };

  toggleCompleted = event => {
    // this.setState({
    //   todosData: [...this.state.todosData]
    // });
    console.log(event.target);
  };

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList
          todosData={this.state.todosData}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm
          handleChange={this.handleChange}
          inputText={this.state.inputText}
          setNewTodoItem={this.setNewTodoItem}
        />
      </div>
    );
  }
}

export default App;
