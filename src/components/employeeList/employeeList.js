import React, {useState} from "react";
import Employees from "../../utils/employees.json"

const EmployeeList = () => {

    const [employeeState, setEmployeeState] = useState(Employees);

    return(
        <ul>
{employeeState.map(employee => <li>{employee.name}</li>)}
        </ul>
    )
};

export default EmployeeList;