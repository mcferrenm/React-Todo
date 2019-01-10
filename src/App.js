import React from "react";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoSearch from "./components/TodoComponents/TodoSearch";

import "./app.css";

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
      [event.target.name]: event.target.value
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
    this.setState({
      todosData: this.state.todosData.map(todo => {
        if (todo.id !== parseInt(event.target.id, 10)) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    const copyTodos = this.state.todosData.filter(todo => !todo.completed);

    this.setState({
      todosData: copyTodos
    });
  };

  handleFilterList = () => {
    // control input field values
    console.log(123);
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <h2>Todo List:</h2>
          <h3>Stretch</h3>
          <TodoSearch
            handleFilterList={this.handleFilterList}
            searchInputText={this.state.searchInputText}
          />
          <span role="img" className="eyes">
            👀
          </span>
        </div>
        <div className="body">
          <TodoForm
            handleChange={this.handleChange}
            inputText={this.state.inputText}
            setNewTodoItem={this.setNewTodoItem}
            clearCompleted={this.clearCompleted}
          />
          <TodoList
            todosData={this.state.todosData}
            toggleCompleted={this.toggleCompleted}
          />
        </div>
      </div>
    );
  }
}

export default App;
