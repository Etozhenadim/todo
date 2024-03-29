import {TodoAdd} from "./TodoAdd/TodoAdd";
import ToDoList from "./TodoList/TodoList";
import {ThemeSwitcher} from "./ThemeSwitcher/ThemeSwitcher";
import React, {useEffect, useState} from "react";

export const Todo =()=>{
    const [theme, setTheme] = useState('#1d5a62')
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

    return (
        <div className='todo' style={{backgroundColor: theme}}>
            <div className="todo_switcher">
                <ThemeSwitcher theme={theme} setTheme={setTheme}/>
            </div>

            <div className='todo_wrapper' >
                <TodoAdd todo={todo} setTodo={setTodo}/>
                <ToDoList todo={todo} setTodo={setTodo}/>
            </div>

        </div>
    )
}