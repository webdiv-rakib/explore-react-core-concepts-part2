import { useState } from "react"
import Employee from "./Employee"
import './Employees.css'
export default function Employees() {
    const [employees, setEmployees] = useState([])
    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setEmployees(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='employ'>
            <h2>Employee Count: {employees.length}</h2>
            <hr />
            {
                employees.map(role => <Employee role ={role}></Employee>)
            }
        </div>
    )
}