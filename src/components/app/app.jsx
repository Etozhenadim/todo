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
    
    return (
        <div className="app">
            <AppInfo />

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList 
                data = {data}
                onDelete = {id => console.log(id)}
            />
            <EmployeesAddForm />
        </div>
    )
}

export default App;