import React from 'react'

type Props ={
  todoFilter: any
}

function TodoFilter({todoFilter} : Props){

  return (
      <div className="todo_filter">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">
            Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button" onClick={() => todoFilter('all')}>All</button>
            <button className="dropdown-item" type="button" onClick={() => todoFilter(true)}>Unresolved</button>
            <button className="dropdown-item" type="button" onClick={() => todoFilter(false)}>Resolved</button>
          </div>
      </div>
  )
}

export default TodoFilter


   