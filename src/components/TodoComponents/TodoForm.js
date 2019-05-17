import React, { Component } from 'react'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: {
              task: '',
              id: '',
              completed: ''
            }
        };
    }

    handleChange = e => {
        this.setState({
            newTodo: {
                [e.target.name]: e.target.value,
                id: Date.now(),
                completed: false
            }
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: {
                task: '',
                id: '',
                completed: false
            }
        })
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input 
                name="task"
                value={this.state.newTodo.task}
                onChange={this.handleChange}
                placeholder="todo..."
                key={this.id}
            />
            <button
            onClick={this.handleSubmit}
            >Add Todo</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;