import {Link, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Editemp(){
    const location=useLocation();
    const[empdet,setEmpdet]=useState("");
    const id=location.state;
    const navigate=useNavigate();
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const response=await axios.get("http://localhost:8080/Employees/profile/"+id);
                setEmpdet(response.data)
                setLoading(false)
            }catch(error){
                console.log(error);
                setLoading(false);
            }
        };
        fetchdata()
    },[]);

    const handleSubmit=(e)=>{e.preventDefault();
        axios.put("http://localhost:8080/Employees/profileupdate/"+id)
            .then((res)=>{setEmpdet(res.data)},(error)=>{console.log(error)})
        
    };
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setEmpdet({...empdet,[name]:value});
    };
    return(<div>
        

        <form onSubmit={handleSubmit}>
        <input type='text' name='empname' onChange={handleChange} value={empdet.empname} placeholder='Enter Emp name'/><br/><br/>
        <input type='number' name='empsal' onChange={handleChange} value={empdet.empsal} placeholder='Enter Emp salary'/><br/><br/>
<input type='submit' value="update"/>
</form> 
</div>)
}
export default Editemp;