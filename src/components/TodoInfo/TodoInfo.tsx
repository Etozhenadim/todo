import React from 'react'


type Props = {
  todo: []
}
const TodoInfo = ({todo}:Props) =>{
  const todoInfo = {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "10px",
    border: "2px solid black",
    fontSize: "20px",
    width: "fit-content"
  }

  return (
    <div style={todoInfo}>
        <h2>Completed</h2>
        <h3>
          {todo.filter((item: { status: boolean })=> item.status === false).length} 
          /{todo.length}
        </h3>
    </div>
  )
}

export default TodoInfo