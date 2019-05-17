import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  constructor(props){
    super(props);
     this.state = {
       todos: [
         {
           task: 'Organize Garage',
           id: 1,
           completed: false
         },
         {
           task: 'Bake Cookies',
           id: 2,
           completed: false
         }
       ]
     }
  }


  addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = taskId => {
    this.setState({
      todos: this.state.todos.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  clearTodo = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <div>
        <TodoForm 
        addTodo={this.addTodo}
        />
        
        {this.state.todos.map(todo => (
          <Todo 
          key={todo.id}
          todo={todo}
          toggleComplete={this.toggleComplete}
          />
        ))}
        <button
        onClick={e => this.clearTodo(e)}
        >Clear</button>
      </div>
    );
  }
}

export default App;
