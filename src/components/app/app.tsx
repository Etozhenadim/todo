import './app.css'
import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

function App(){
    const data = [
        {name: 'Nadim', salary: 500},
        {name: 'Vasya', salary: 500},
        {name: 'Ilya', salary: 500},
    ];
    
    return (
        <div className="app">
            <AppInfo />

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data = {data}/>
            <EmployeesAddForm />
        </div>
    )
}

export default App;