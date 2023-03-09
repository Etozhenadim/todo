import React, { useState, useEffect } from 'react';
import {TodoAdd} from './TodoAdd/TodoAdd'
import ToDoList from './TodoList/TodoList'
import './app.css'
import {ThemeSwitcher} from "./ThemeSwitcher/ThemeSwitcher";

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
    <div className='container'>
        <TodoAdd todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
        <ThemeSwitcher />
    </div>
   
   )
  }
  