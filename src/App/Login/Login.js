import React from 'react';
import login from './login.module.css'


const Login = () => {
  return <div>

    <div className={login}>
        <h2>Logo</h2>
    </div>
    <div>
      <h1>Ingresa</h1>
    </div>
    <div>
      <button>Login</button><br/>
      <button>Sign in</button>
    </div>
  </div>
};

export default Login;
