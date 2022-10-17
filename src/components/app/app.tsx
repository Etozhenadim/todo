import React, { useState, useEffect } from 'react';
import AddTodo from '../TodoAdd/TodoAdd'
import ToDoList from '../TodoList/TodoList'
import './app.css'

export function App() {
  
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    if (savedTodo) {
      return JSON.parse(savedTodo);
    } else {
      return [];
    }
  })

  useEffect(()=> {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  
   return(
    <div className='app'>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
   
   )
  }
  