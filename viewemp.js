import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
//api call
//localhost:8080/employees/fetchemployee=>get method
//download dependcies axios using following command
//npm i axios
function ViewEmp(){
    const[Empdet,SetEmpdet]=useState([]);
    axios.get('http://localhost:8080/Employees/fetchEmployees')
    .then(response => {
        SetEmpdet(response.data);
    }).catch(error=>{
        console.log(error);
    });
    const navigate=useNavigate ();
    function updateemp(id){
       // axios.put('http://localhost:8080/Employees/profileupdate/'+id)
        navigate("/editEmp",{state:id});
    }
       function delemp(id){
        axios.delete('http://localhost:8080/Employees/delemp/'+id)
        .then((res)=>{},(error)=>{console.log(error)    })
    }
    return(<div>
        <Link to="/home">Home</Link><br></br>
        <Link to="/Register">Register</Link><br></br>
        <Link to="/about">About</Link><br></br>
        <Link to="/addemployee"></Link>
        <Link to="/viewemp"></Link>
        <Link to="/contact"></Link>

        <h1>View Employees</h1>
        <table>
            <tr>
                <th>Empname</th>
                <th>Empsal</th>
                <td>update</td>
                <td>delete</td>
                      </tr>
            {
                Empdet.map(
                    emp=>
                <tr key={Empdet.empid}>
                   
                    <td>{emp.empname}</td>
                    <td>{emp.empsal}</td>
                
                    <td><button onClick={(e)=>updateemp(emp.empid)}>Update</button></td>
                <td><button onClick={(e)=>delemp(emp.empid)}>Delete</button></td>
      
            </tr>
                )}
        </table>
        </div>);
}
export default ViewEmp;