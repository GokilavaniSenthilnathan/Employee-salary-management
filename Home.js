import { Link } from "react-router-dom";
function Home(){
    return(
    <div style={{position:"relative",height:100}}>
        <h1>Home Page</h1>
        <p><b>WELCOME TO MY WEBSITE</b></p>
        <Link to="/home"></Link>
        <Link to="/Register">Register</Link><br></br>
        <Link to="/about"></Link>
        <Link to="/addemployee"></Link>
        <Link to="/viewemp"></Link>
        <Link to="/contact">contact</Link>

        </div>)
        

}
export default Home;