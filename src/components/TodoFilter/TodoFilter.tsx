import React from 'react'

type Props ={
  todoFilter: any
}

function TodoFilter({todoFilter} : Props){

  const Filter = {
    marginTop: "20px",
  }

  return (
      <div className="btn-group" role="group" aria-label="Basic example" style ={Filter}>
            <button type="button" className="btn btn-secondary" onClick={() => todoFilter('all')}>All</button>
            <button type="button" className="btn btn-secondary" onClick={() => todoFilter(true)}>Unresolved</button>
            <button type="button" className="btn btn-secondary" onClick={() => todoFilter(false)}>Resolved</button>
      </div>
  )
}

export default TodoFilter


   