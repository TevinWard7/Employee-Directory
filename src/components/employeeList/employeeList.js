import React, {useState} from "react";
import Employees from "../../utils/employees.json"

const EmployeeList = () => {

    const [employeeState] = useState(Employees);
    const [searchName, setSearchName] = useState("");
    const employFiltered = employeeState.filter(employee => employee.name.includes(searchName));

    const displayEmployees = () => {
        if (searchName) {
            employFiltered.map(employee => <li>{employee.name}</li>)
        } else {
            employeeState.map(employee => <li>{employee.name}</li>)
        }
    }

    return(
        <>
        <h3>name: {searchName}</h3>
        <input value={searchName.charAt(0).toUpperCase() + searchName.slice(1)} placeholder="Name" type="text" name="search" onChange={e => setSearchName(e.target.value)} />
        <ul>
            {displayEmployees()}
        </ul>
        </>
    )
};

export default EmployeeList;