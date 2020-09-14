import React, {useState} from "react";
import Employees from "../../utils/employees.json"
import "./employeeList.css"

const EmployeeList = () => {

    // Json
    const [employeeState] = useState(Employees);

    const [searchName, setSearchName] = useState("");
    const employFiltered = employeeState.filter(employee => employee.name.includes(searchName));

    const [sortNames, setSortNames] = useState("");

    let defaultNameList = employeeState.map(employee => employee.name);

    const displayEmployees = () => {
        if (searchName) {
            return employFiltered.map(employee => 
            <div className="card">
                <p>{employee.role}</p>  
                <img src={employee.image} class="card-img-top" alt="profile" height="10%"/>
                <div className="card-body">
                <h5 class="card-title">{employee.name}</h5>
            </div>
          </div>
            )
        }
        if (sortNames === "true") {
            defaultNameList = defaultNameList.sort()
            return defaultNameList.map((name) => <li>{name}</li>)
        }
        else {
            return defaultNameList.map((name) => <li>{name}</li>)
        }
    };

    console.log(defaultNameList)

    return(

        <div className="container">

        <br/>   
        <div id="search">
        <input value={searchName.charAt(0).toUpperCase() + searchName.slice(1)} placeholder="Name" type="text" name="search" onChange={e => setSearchName(e.target.value)} /><button onClick={e => setSortNames("true")}>A-Z</button>
        <br/>
        <h3>{searchName}</h3>
        </div>

        <br/>

        <ul>
            {displayEmployees()}
        </ul>

        </div>
    )
};

export default EmployeeList;