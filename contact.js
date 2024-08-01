import { Link } from "react-router-dom";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdPhonePaused } from "react-icons/md";


function Contact(){
    const [empdet,setEmpdet]=useState("");
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setEmpdet=(values=>({...values,[name]:value}));
     
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(empdet);
        console.log(empdet)
    }
    return(
    <div>
        <h1>Contact page</h1>
        <Link to="/home"></Link>
        <Link to="/Register"></Link>
        <Link to="/about"></Link>
        <Link to="/addemployee"></Link>
        <Link to="/viewemp"></Link>
        <Link to="/contact"></Link>
   <form>
   
       <h1><b>location:</b></h1>

      <p><FaLocationDot />
VSB College of Engineering Technical Campus </p>

      <p>Ealur pirivu,Solavampalayam,kinathukadavu,coimbatore</p>
      <h1><b>
Phone:</b></h1>
      <p><MdPhonePaused />
+91 8220048212</p>
  
        
           
            
        </form>
        </div>)
}
export default Contact;