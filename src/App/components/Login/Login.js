import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../Assets/Vector.png';
import './Login.scss'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from "react-google-login";

// Redirección a nueva página desde javascript
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  // =========================
  // GOOGLE

  // Login exitoso
  const googleSuccess = (response) => {
    navigate("/portfolio");
    console.log(response.profileObj);
  }

  // Login fallido
  const googleFailure = (response) => {
    console.log(`Failed to Log in: ${response}`);
  }

  // =========================

  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked = () =>{
    console.log("Estas logueado")
  }
   

    return (
      <div className="container logoBox">

          {/* Contenido */}
          <div className="logoIcon">
              <img src={logo} alt="logo"/>
          </div>
          <div className="logo_name">
              <h1>Login</h1>
          </div>

          <div className="logo_box_info">
            
            <GoogleLogin 
              clientId="990173810108-o8a32tut813k0ulff95c1gldnk17occc.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
            />

            <br/> 
            
            <FacebookLogin 
              cssClass="facebook"
              appId="538754370702621"
              autoLoad={false}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
            />
              
            <br/>
            <Link to={`/logincorreo`}><button>Login with Email</button></Link>
          </div>
      </div>
      
    )
}
  


export default Login
