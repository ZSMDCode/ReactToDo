import React, { Component } from 'react';
class ToDo extends Component {
  render() {
    return (
      <div>
      <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
      <span>{ " " + this.props.description + " "}</span>
      <button className="DeleteButton" onClick={ this.props.deleteToDo }>Delete</button>
      </div>
    );
  }
}
export default ToDo;
