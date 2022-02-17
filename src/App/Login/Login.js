import React from 'react';
import { Link } from 'react-router-dom';
import login from './login.module.css'
import logo from '../'



const Login = () => {
  return <div className={login}>

    <div>
        <h2>Logo</h2>
    </div>
    <div>
      
    </div>
    <div>
      <Link to={`/formLogin`}><button>Login</button></Link><br/>
      <button>Sign in</button>
    </div>
  </div>
};

export default Login;
