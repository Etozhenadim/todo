import React, { useState } from 'react';

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
  
  const [todo, setTodo] = useState([
    {id: 1, title: 'test', status: false},
    {id: 2, title: 'test2', status: true},
    {id: 3, title: 'test3', status: true},
  ]);

   return(
    <div style ={appBlock}>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
   
   )
  }
  