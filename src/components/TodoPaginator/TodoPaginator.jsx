import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

export const TodoPaginator = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []

    for(let i= 1; i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
        console.log(pageNumbers)
    }

  return (
        <Pagination className='todo_pagination'>
            {pageNumbers.map(number => (
                <Pagination.Item key= {number} onClick= {()=> paginate(number)} >
                        {number}
                </Pagination.Item>
            ))}
        </Pagination>
  )
}
