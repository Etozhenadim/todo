import React, { useState, useEffect } from 'react';

import AddTodo from '../TodoAdd/AddTodo'
import ToDoList from '../TodoList/TodoList'
import './app.css'

export function App() {
  const appBlock = {
    padding: "10px",
    border: "1px solid black",
    width: "fit-content",
    margin: "20px auto 0"
  }

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
    <div style ={appBlock}>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
   
   )
  }
  