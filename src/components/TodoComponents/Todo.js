import React from 'react'

const Todo = props => {
  return (
    <div
    className={`todo${props.todo.complete ? " complete" : ""}`}
      onClick={() => props.toggleComplete(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  )
}

export default Todo
