import {useEffect, useState} from "react";

export const useTodoList = ({todo, setTodo}) => {
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    const [filtered, setFiltered] = useState(todo);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

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


    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    return {
        filtered,
        setFiltered,
        todoFilter,
        deleteTodo,
        statusTodo,
        editTodo,
        saveTodo,
        currentPosts, paginate, edit, setValue, value
    }
}