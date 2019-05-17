import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import './styles.css'

const todo = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Wash Car",
    id: 1528817077287,
    completed: false
  },
  {
    task: "Clean Room",
    id: 1528817077786,
    completed: false
  }
];

class App extends React.Component {
  state = {
    task: "",
    todo
  };

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      task: todo,
      completed: false,
      id: Date.now() * 100
    };

    this.setState({
      todo: [...this.state.todo, newTodo],
      task: ""
    });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(todo => !todo.completed)
    });
  };

  toggleTask = todoId => {
    console.log("todoId: ", todoId);
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  render() {
    console.log(this.state.todo);
    return (
      <div className='container'>
        <h1>Todo List</h1>

        <TodoList todo={this.state.todo} toggleTask={this.toggleTask} />

        <TodoForm
          task={this.state.task}
          addTodo={this.addTodo}
          onInputChange={this.onInputChange}
          toggleTask={this.toggleTask}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
