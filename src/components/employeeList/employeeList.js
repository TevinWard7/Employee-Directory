import React, {useState} from "react";
import Employees from "../../utils/employees.json"
import "./style.css"

const EmployeeList = () => {

    const [employeeState] = useState(Employees);
    const [searchName, setSearchName] = useState("");
    const employFiltered = employeeState.filter(employee => employee.name.includes(searchName));

    const displayEmployees = () => {
        if (searchName) {
            return employFiltered.map(employee => 
            <div className="card">
            <img src={employee.image} class="card-img-top" alt="profile" height="10%"/>
            <div className="card-body">
            <h5 class="card-title">{employee.name}</h5>
            </div>
          </div>
            )
        } else {
            return employeeState.map(employee => <li>{employee.name}</li>)
        }
    }

    return(

        <div className="container">

        <h3>{searchName}</h3>
        <input value={searchName.charAt(0).toUpperCase() + searchName.slice(1)} placeholder="Name" type="text" name="search" onChange={e => setSearchName(e.target.value)} />

        <br/>

        <ul>
            {displayEmployees()}
        </ul>

        </div>
    )
};

export default EmployeeList;