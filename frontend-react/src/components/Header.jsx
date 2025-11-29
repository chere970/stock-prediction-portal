import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider.jsx';
//

const Header = () => {
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
    <Link className='navbar-brand text-light' to="/"> Stock Prediction Portal</Link>
    <div>
      {isLoggedIn ? (<span className='text-light'>Logout</span>):(
        <><Button text="Login" url="/login" class="btn-outline-info"/>
        &nbsp; &nbsp;
       <Button text="Register" url="/register" class="btn-info"/></>
      )}
        

    </div>

    </nav>
    
    </>
  )
}

export default Header