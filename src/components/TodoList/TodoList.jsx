import React, {useState, useEffect} from 'react'
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoInfo from '../TodoInfo/TodoInfo';
import { TodoPaginator } from '../TodoPaginator/TodoPaginator';
import { RiDeleteBin6Line, RiEditLine } from 'react-icons/ri';
import {MdOutlineFileDownloadDone} from 'react-icons/md'

import {useTodoList} from './useTodoList'

import Button from 'react-bootstrap/Button';

function ToDoList({todo, setTodo}) {


    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

    const {deleteTodo, filtered, setFiltered, todoFilter, statusTodo, editTodo, saveTodo, currentPosts, paginate, edit, value, setValue}=useTodoList({todo, setTodo
    })


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
                        <div className={ !item.status ? 'todo-list_item--close' : ''}>{item.title}</div>
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