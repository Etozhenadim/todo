import React, {useState, useEffect} from 'react'
import style from './TodoList.module.css'
function ToDoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo);

    useEffect( () => {
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
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" onClick={() => todoFilter('all')}>All</button>
            <button type="button" class="btn btn-secondary" onClick={() => todoFilter(true)}>Unresolved</button>
            <button type="button" class="btn btn-secondary" onClick={() => todoFilter(false)}>Resolved</button>
        </div>
        {/* <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1" onClick={() => todoFilter('all')}>All</option>
            <option value="2" onClick={() => todoFilter('true')}>Two</option>
            <option value="3" onClick={() => todoFilter('false')}>Three</option>
        </select> */}

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
    </div>
  ) 
}

export default ToDoList