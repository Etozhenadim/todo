import React from 'react'
import './TodoInfo.css'

type Props = {
  todo: []
}
const TodoInfo = ({todo}:Props) =>{

  return (
    <div className='todo-info'>
        <h2>Completed</h2>
        <h3>
          {todo.filter((item: { status: boolean })=> item.status === false).length} 
          /{todo.length}
        </h3>
    </div>
  )
}

export default TodoInfo