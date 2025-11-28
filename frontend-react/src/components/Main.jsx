import React from 'react'
import Button from './Button'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    
      <div className='container'>
        <div className='p-5 text-cente bg-light-dark rounded'>
          <h1 className='text-light'> Stock Prediction Portal</h1>
          <p className='text-light lead'>Decouple helps you to organize your settings so that you can change parameters without having to redeploy your app.

It also makes it easy for you to:

store parameters in ini or .env files;

define comprehensive default values;

properly convert values to the correct data type;

have only one configuration module to rule all your instances</p>
{/* <a className='btn btn-info text-light'  href="">Login</a> */}
<Button text="Login" class="btn-outline-info"/>
        </div>

      </div>
     
    </>
  )
}

export default Main