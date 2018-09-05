import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Check out www.alphagility.com', isCompleted: true },
        { description: 'Prepare portfolio apps', isCompleted: true },
        { description: 'Send portfolio apps', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }
  deleteToDo(index) {
    const todos = this.state.todos;
    const todo = todos.filter(item => this.state.todos[index]!== item);
    this.setState({ todos: todo });
  }
    render() {
      return (
        <div className="App">
        <h1>Today's To Do List: </h1>
        <ol>
        { this.state.todos.map( (todo,index) =>
          <li><ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteToDo={ () => this.deleteToDo(index)} /></li>
        )}
        </ol>
        <form id="list" onSubmit={ (e) => this.handleSubmit(e) }>
          <h5>{"Enter a new item: "}<input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
        <input type="submit" /></h5>
        </form>
        </div>
      );
    }
  }
  export default App;
