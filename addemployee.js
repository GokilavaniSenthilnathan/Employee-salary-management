import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function AddEmp() {
    const [empdet, setEmpdet] = useState("");
    const navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEmpdet(values => ({ ...values, [name]: value }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/Employees/addEmployee",
            { empname: empdet.empname, empsal: empdet.empsal })
            .then((res) => { console.log(res); navigate("/viewemp"); },
                (error) => { console.log(error) })
    }
    return <div>
        <Link to="/home">Home</Link>
        <Link to="/Register">Register</Link>
        <Link to="/about">About</Link>
        <Link to="/addemployee"></Link>
        <Link to="/viewemp"></Link>
        <Link to="/contact"></Link>

        <form onSubmit={handleSubmit}>
            <input type='text' name='empname' onChange={handleChange} value={empdet.empname} placeholder='Enter Emp name' /><br /><br />
            <input type='number' name='empsal' onChange={handleChange} value={empdet.empsal} placeholder='Enter Emp salary' /><br /><br />
            <input type='submit' />
        </form>
    </div>
}
export default AddEmp;