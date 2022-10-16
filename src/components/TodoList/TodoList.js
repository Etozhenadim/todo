import React, {useState, useEffect} from 'react'
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoInfo from '../TodoInfo/TodoInfo';
import style from './TodoList.module.css'


function ToDoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo);

    useEffect(() => {
        setFiltered(todo)
    }, [todo])


    const todoFilter = (status) => {
        if(status === 'all'){
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }

   const deleteTodo = (id)=>{
        let newTodo = [...todo].filter(elem=> elem.id !== id);
        setTodo(newTodo);
   } 
   const statusTodo = (id) =>{
    let newTodo = [...todo].filter(item => {
        if(item.id === id){
            item.status = !item.status
        }
        return item
    })
    setTodo(newTodo)
   }
   const editTodo = (id, title)=>{
        setEdit(id)
        setValue(title)
   }
   const saveTodo = (id) =>{
    let newTodo = [...todo].map(item => {
        if(item.id === id){
            item.title = value
        }
        return item
    })
    setTodo(newTodo)
    setEdit(null);
   }


  return (
    <div>
        {filtered.map(item => 
            <div key= {item.id}>
                {
                    edit === item.id ? 
                        <><input onChange={(e)=> setValue(e.target.value)} value={value}/></>
                        :
                        <div className={!item.status ? style.close : ''}>{item.title}</div>
                }
                 
                {
                    edit === item.id ? 
                        <button onClick={()=> saveTodo(item.id)} >Save</button>
                        : 
                        <>
                        <button onClick={ () => deleteTodo(item.id)}>Delete</button>
                        <button onClick={ () => editTodo(item.id, item.title)}>Edit</button>
                        <button onClick={ () => statusTodo(item.id)}>Resolved</button>
                        </>
                }
               
            </div>
        )}

        <TodoFilter 
            todoFilter = {todoFilter}
        />

        <TodoInfo todo={todo}/>

    </div>
  ) 
}

export default ToDoList