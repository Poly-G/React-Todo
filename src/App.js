import React from 'react';

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
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
