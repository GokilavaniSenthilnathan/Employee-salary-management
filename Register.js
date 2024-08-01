import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    name: '',
    gender: '',
   email: '',
    confirmPassword: '',status:'',educationalqualification:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    
    }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add validation logic before submitting the form
    console.log('Form submitted:', formData);
    navigate('/about');
  };

  return (
    <div>
      <h2>Registration Form</h2>
      

      <form onSubmit={handleSubmit}>
        <div >
          <label>Name:</label>
          <div classname="input-box">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div>
          <label>gender:</label>
          <div classname="input-box">

          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div>
          <label>Age:</label>
          <div classname="input-box">

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div>
          <label>DOB:</label>
          <div classname="input-box">

          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div>
          <label>email:</label>
          <div classname="input-box">

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div>
          <label>Confirm Password:</label>
          <div classname="input-box">

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div>
          <label>Status:</label>
          <div classname="input-box">

          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div>
          <label>Educational Qualification:</label>
          <div classname="input-box">

          <input
            type="text"
            name="educationalqualification"
            value={formData.educationalqualification}
            onChange={handleChange}
          />
        </div></div><br></br>
        <div classname="input-box">

        <input type="submit"value="Register"></input>
        </div>
      </form>
    </div>
  );
}

export default Register;