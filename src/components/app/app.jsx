import React, { useState } from 'react';

import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App(){
    const [data, setData] = useState([ 
        {name: 'Nadim', salary: 100, increase: false, id: 1},
        {name: 'Vasya', salary: 500, increase: true, id: 2},
        {name: 'Ilya', salary: 1000, increase: false, id: 3},
    ])
    let maxId = 4;
    
    const onDelete = (id) => {
        setData(prevState => prevState.filter(item => item.id !==id))
        
    }
    const onAdd = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            id: maxId++
        }
        const newArr = [...data, newItem];
        setData(newArr);
            
    }
    const onToggleIncrease = (id) =>{
        console.log( `Increase this ${id}`)
    }

    const onToggleRise = (id) =>{
        console.log( `Rise this ${id}`)
    }


    return (
        <div className="app">
            <AppInfo />

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList 
                data = {data}
                onDelete = {onDelete}
                onToggleIncrease = {onToggleIncrease}
                onToggleRise = {onToggleRise}
            />
            <EmployeesAddForm 
                onAdd = {onAdd}
            />
        </div>
    )
}

export default App;