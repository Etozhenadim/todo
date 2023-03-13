import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const TodoAdd=({todo, setTodo}) => {
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
    <div className='todo_add'>
        <h1>Todo List</h1>
        <Form.Group className='todo_add--input'>
            <Form.Control type="text" placeholder="What to do next?" value ={value} onChange={(e)=> setValue(e.target.value)} />
            <Button variant="success" onClick={saveTodo}>
                +
            </Button>
        </Form.Group>
    </div>
  )
}

