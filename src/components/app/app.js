import React, { useState } from 'react';

import AddTodo from '../AddTodo/AddTodo'
import Header from '../Header/Header'
import ToDoList from '../TodoList/TodoList'
import './app.css'


export function App() {
  
  const [todo, setTodo] = useState([
    {id: 1, title: 'firstTodo', status: true},
    {id: 2, title: 'secondTodo', status: true},
    {id: 3, title: 'thirdTodo', status: true},
  ])

   return(
    <div>
        <Header />
        <AddTodo />
        <ToDoList todo={todo} setTodo={setTodo}/>
    </div>
   
   )
  }
  