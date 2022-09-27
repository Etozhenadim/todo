import './employees-add-form.css';
import React, { useState } from 'react';

const EmployeesAddForm = (props: { onAdd: (arg0: string, arg1: string) => void; }) => {
    const [name, setName] = useState("");
    const [salary, setSalary] = useState("");

   const onAdd = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        if(!name || !salary) return;
        props.onAdd(name,salary);
   }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex"
                onSubmit = {onAdd}>
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?" 
                       value = {name}
                       onChange = {(event) => setName(event.target.value)}
                       />
                <input type="number"
                       className="form-control new-post-label"
                       value = {salary}
                       placeholder="З/П в $?" 
                       onChange = {(event) => setSalary(event.target.value)}
                       />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;