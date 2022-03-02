import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../../Assets/Vector.png';
import '../../../index.css'

const SignIn = () => {

  return (
    <div className='container'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1>Ingresa</h1>
        <NavLink to={`/login`}><button>Login</button></NavLink>
        <br />
        <NavLink to={`/registro`}><button>Sign In</button></NavLink>
      </div>
    </div>
  )
}

export default SignIn