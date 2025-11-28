import React, { useState } from 'react'
import axios from 'axios';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [errors, setErrors] = useState({});
  const handleRegistration = async (e) => {
    e.preventDefault();
    const userData={
      username,
      email,
      password  
    }

    try{
     const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
      console.log('Registration Successful:', response.data);
      
    }
    catch(error){
      setErrors(error.response.data); 
      console.error("Registration Error:", error.response.data);
    }
  }
  return (
    <>
    <div className='container'>
      <div className='row justify-content-center bg-light-dark p-5 rounded'>
        <div className='col-md-6'>
          <h3 className='text-light text-center'>Create Account</h3>
          <form action="" onSubmit={handleRegistration}>
            <input type="text" className='form-control mb-3' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="email" className='form-control mb-3' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className='form-control mb-3' placeholder='Set Password' value={password}onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
          </form>
        </div>
      </div>

    </div>
    </>
  )
}

export default Register