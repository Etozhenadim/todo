import React from 'react'

function TodoInfo({todo}) {
  return (
    <div>
        <h2>Решенных {todo.filter(item=> item.status === false).length}</h2>
        <h2>Общее количество {todo.length}</h2>
    </div>
  )
}

export default TodoInfo