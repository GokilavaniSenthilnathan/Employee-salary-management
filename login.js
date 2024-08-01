import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logging in with username:', username, 'and password:', password);
        navigate('/home');
    };

    return (
        <div style={{width:400,height:400,background:"#ffffff",padding:30,alignItems:'center',marginTop:50}}>

            <div style={{marginLeft:100}}>
            <h1>LOGIN </h1>
            
            <form onSubmit={handleLogin}>
                <label>
                    Username:
                    <div classname="input-box">
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    /><FaUser /></div>
                </label>
                <br />
                <label>
                    Password:
                    <div classname="input-box">
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <FaUnlockKeyhole />
                    </div>
                </label>
                <br />
                <input  type="submit" value="login"></input>
                
            </form><br/><br/>
 
        </div>
        </div>
    );
}

export default Login;