import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../Assets/Vector.png'
import './SignUp.scss'

const SignUp = () => {
  return (
    <div className='container logoBox'>
        <div className='logoIcon'>
            <img src={logo} alt="logo"/>
        </div>
        <div className='logo_box_info'>
            <button >Sign In with Google</button><br/>
            <button>Sign In with Facebook</button><br/>
            <Link to={`/registroEmail`}> <button>Sign In with Email</button></Link> 
        </div>

    </div>
  ) 
}

export default SignUp