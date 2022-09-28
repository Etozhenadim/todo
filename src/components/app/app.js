import React, { useState } from 'react';

import AddTodo from '../AddTodo/AddTodo'
import Header from '../Header/Header'
import ToDoList from '../TodoList/TodoList'
import './app.css'


export function App() {
  
  const [todo, setTodo] = useState([
    
  ])

   return(
    <div>
        <Header />
        <AddTodo todo={todo} setTodo={setTodo}/>
        <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
   
   )
  }
  