import React from "react";
import logo from '../../../Assets/Vector.png';
import '../../../index.css'



const Login = () => {
  return (
    <div className="container">
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
