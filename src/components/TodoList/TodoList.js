import React from 'react'

function ToDoList({todo, setTodo}) {
    console.log({todo})
  return (
    <div>
        {todo.map(item => 
            <div>{item.title}</div>
        )}
    </div>
  )
}

export default ToDoList