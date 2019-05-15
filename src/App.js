import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  state = {
    task: '',
    todos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      },
      {
        task: 'Wash Car',
        id: 1528817077287,
        completed: false
      },
      {
        task: 'Clean Room',
        id: 1528817077786,
        completed: false
      },
    ]
  }

  onInputChange = event => {
    this.setState({ task: event.target.value })
  }

  addTodo = (event, todo) => {
    event.preventDefault()
    const newTodo = {
      task: todo,
      completed: false,
      id: Date.now() * 100,
    }

    this.setState({
      todos: [...this.state.todos, newTodo],
      task: '',
    })
  }

  render() {
    return (
      <div>

        <h1>Todo List</h1>

        <TodoList todos={this.state.todos} />

        <TodoForm
          task={this.state.task}
          addTodo={event => this.addTodo(event, this.state.task)}
          onInputChange={this.onInputChange}
        />

      </div>
    );
  }
}

export default App;
