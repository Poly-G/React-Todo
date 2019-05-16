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
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

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
          />
        ))}
      </div>
    );
  }
}

export default App;
