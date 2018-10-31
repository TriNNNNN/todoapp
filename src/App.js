import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';


class App extends Component {

  state = {
    todos: [
      {id: 1, content:'Buy some milk'},
      {id: 2, content:'Play Pubg'}
    ]
  }

  deleteTodo = (id) => {
    this.setState(prevState =>({
      todos: prevState.todos.filter(todo => {
        return todo.id != id
      })
    }))
  }

  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState(prevState =>({
      todos: todos
      }))
  }

  render() {
    return (
      <div className="todo-app container">
       <h1 className="center blue-text">Todo's</h1>
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
       <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
