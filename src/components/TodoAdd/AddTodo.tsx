import React, {useState} from 'react'

function AddTodo({todo, setTodo}:([] | any)) {
  const [value, setValue] = useState('');

  const saveTodo =()=> {
      setTodo(
        [...todo, {
          id: Math.floor(Math.random() * 10000),
          title: value, 
          status: true
        }]
      )
      setValue('');
  }

  
  return (
    <div>
      <input placeholder='What to do next?' value ={value} onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={saveTodo}> Add</button>
    </div>
  )
}

export default AddTodo;