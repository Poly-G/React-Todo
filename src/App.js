import React from 'react';
import Todo from './components/TodoComponents/Todo';


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


  render() {
    return (
      <div>
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
