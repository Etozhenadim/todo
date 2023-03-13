import React, {useState, useEffect} from 'react'
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoInfo from '../TodoInfo/TodoInfo';
import { TodoPaginator } from '../TodoPaginator/TodoPaginator';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';
import {MdOutlineFileDownloadDone} from 'react-icons/md'

import Button from 'react-bootstrap/Button';



function ToDoList({todo, setTodo}) {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
 
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

   // Paginator Logic
   const indexOfLastPost  = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;
   const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

   //Change number in paginator
   const paginate = (pageNumber)=> {
    setCurrentPage(pageNumber)
   }

  return (
    <div className='todo-list'>
        <div className='todo-list_header'>
            <TodoInfo todo={todo}/>
            <TodoFilter
                todoFilter = {todoFilter}
            />
        </div>

        {currentPosts.map(item => 
            <div key= {item.id} className='todo-list_item'>
                {
                    edit === item.id ? 
                        <><input onChange={(e)=> setValue(e.target.value)} value={value}/></>
                        :
                        <div className={ !item.status ? 'close' : ''}>{item.title}</div>
                }

                {
                    edit === item.id ?
                        <div className='todo-list_item--buttons'>
                        <Button variant="success" onClick={()=> saveTodo(item.id)} >Save</Button>
                        </div>
                        : 
                        <div className='todo-list_item--buttons'>
                            <Button variant="light" onClick={ () => deleteTodo(item.id)}><RiDeleteBin6Line /></Button>
                            <Button variant="light" onClick={ () => editTodo(item.id, item.title)}><RiEditLine /></Button>
                            <Button variant="light" onClick={ () => statusTodo(item.id)}><MdOutlineFileDownloadDone /></Button>
                        </div>
                }

            </div>
        )}

        {
            filtered.length > 5 ?
                <TodoPaginator
                postsPerPage = {postPerPage}
                totalPosts = {filtered.length}
                paginate = {paginate}
                />
                : null

        }


                
    </div>
  ) 
}

export default ToDoList