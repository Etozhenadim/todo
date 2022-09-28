import React, { useState } from 'react';

import AddTodo from '../TodoAdd/AddTodo'
import ToDoList from '../TodoList/TodoList'
import './app.css'


export function App() {
  
  const [todo, setTodo] = useState([
    {id: 1, title: 'test', status: false},
    {id: 2, title: 'test2', status: true},
    {id: 3, title: 'test3', status: true},
  ]);

   return(
    <div>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
   
   )
  }
  