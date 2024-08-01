import { Link } from "react-router-dom";
function About(){
    return(
    <div>
        <h1>About page</h1>
        <Link to="/home"></Link>
        <Link to="/Register"></Link>
        <Link to="/about"></Link>
        <Link to="/addemployee">AddEmp</Link><br></br>
        <Link to="/viewemp">View Employees</Link><br></br>
        <Link to="/contact"></Link>
        </div>)
}
export default About;