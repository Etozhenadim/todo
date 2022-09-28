import React from 'react'

function TodoFilter({todoFilter}) {



  return (
      <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onClick={() => todoFilter('all')}>All</button>
            <button type="button" className="btn btn-secondary" onClick={() => todoFilter(true)}>Unresolved</button>
            <button type="button" className="btn btn-secondary" onClick={() => todoFilter(false)}>Resolved</button>
      </div>
  )
}

export default TodoFilter


   