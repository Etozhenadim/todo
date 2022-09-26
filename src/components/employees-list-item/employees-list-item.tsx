import './employees-list-item.css'
import React, { useState } from 'react';

const EmployeesListItem = (props:any) =>{
    const [increase, setIncrease] = useState(false);
  
    let classNames = "list-group-item d-flex justify-content-between";
    if(increase){
        classNames+= ' increase';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label">{props.name}</span>
            <input type="text" className="list-group-item-input" defaultValue={props.salary + ' $'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick = {() => setIncrease(increase => !increase)}
                        >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={props.onDelete}
                        >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;