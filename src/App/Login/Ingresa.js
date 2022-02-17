import React from 'react'
import { Link } from 'react-router-dom'

const Ingresa = () => {
  return (
    <div>
        <div>
            Logo
        </div>
        <div>
        <Link to={`/formLogin`}><button>Login</button></Link>
        <br/>
        <Link to={`/Registro`}><button>Sign up</button></Link> 
        </div>
    </div>
  )
}

export default Ingresa