import React from "react";
import logo from '../../../Assets/Vector.png';
import './Login.scss'



const Login = () => {
  return (
    <div className="container logoBox">
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <div>
            <h1>Login</h1>
            <br/>
            <button >Login with Google</button><br/>
            <button>Login with Facebook</button><br/>
            <button>Login with Email</button>
        </div>
    </div>
    
  )
}

export default Login
