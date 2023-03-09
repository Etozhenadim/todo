import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './TodoAdd.css'

export const TodoAdd=({todo, setTodo}:([] | any)) => {
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
        <h1>Todo List</h1>


        <InputGroup className="mb-3"  >
            <Form.Control
                value ={value}
                onChange={(e)=> setValue(e.target.value)}
                placeholder='What to do next?'
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
            />
            <Button variant="success" onClick={saveTodo}>
                +
            </Button>
        </InputGroup>

    </div>
  )
}

