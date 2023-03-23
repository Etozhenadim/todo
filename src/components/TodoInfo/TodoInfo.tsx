import React from 'react'

type Props = {
  todo: []
}
const TodoInfo = ({todo}:Props) =>{

  return (
    <div className='todo-info'>
        <h4>Completed</h4>
        <h4>
          {todo.filter((item: { status: boolean })=> item.status === false).length} 
          /{todo.length}
        </h4>
    </div>
  )
}

export default TodoInfo