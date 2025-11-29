import React, { useState,useContext } from 'react'
import axios from 'axios';
// const [loading,setLoading]=useState(false);

import { useNavigate} from 'react-router-dom';
import { AuthContext } from '../AuthProvider.jsx';

const Login = () => {
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loading,setLoading]=useState(false);
const navigate=useNavigate();
const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
const handleLogin= async(e)=>{
  e.preventDefault();
  setLoading(true);
  // Implement login logic here
  // loading(true);
  const userData={
    username,
    password  
  }
  console.log("Login data:",userData);

  try{
const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
// console.log('Login Successful:', response.data);
localStorage.setItem('accessToken', response.data.access);
localStorage.setItem('refreshToken', response.data.refresh);
console.log("Login Successful:");
 navigate('/');
setIsLoggedIn(true);

  }
  catch(error){
    console.error("Login Error:", error.response.data);
  }

  finally{
    setLoading(false);
  }
}
  return (
    <>
          <div className='container'>
      <div className='row justify-content-center bg-light-dark p-5 rounded'>
        <div className='col-md-6'>
          <h3 className='text-light text-center'>Login to our Portal </h3>
          <form action="" onSubmit={handleLogin}>
            <input type="text" className='form-control mb-3' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            
            <input type="password" className='form-control mb-3' placeholder='Set Password' value={password}onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
          </form>
        </div>
      </div>

    </div>

    
    
    </>
  )
}

export default Login