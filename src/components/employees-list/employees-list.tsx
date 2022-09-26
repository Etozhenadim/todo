import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props:any) => {
    const elements  = props.data.map(
        (item: { name: any; salary: any; increase: any; id: any;}) =>{
            const {id, ...itemProps} = item;

            return (
                <EmployeesListItem 
                        key= {id} 
                        {...itemProps}
                        onDelete = {()=>props.onDelete(id)}
                        />
            )
    }) 

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;