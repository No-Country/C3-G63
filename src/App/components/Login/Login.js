import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../../store/auth-context";
import logo from "../../../Assets/Vector.png";
import "./Login.scss";


const Login = () => {
  const authCtx = useContext(Context);
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await authCtx.loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleFacebookSignin = async () => {
    try {
      await authCtx.loginWithFacebook();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container logoBox">
      <div className="logoIcon">
        <img src={logo} alt="logo" />
      </div>
      <div className="logo_name">
        <h1>Login</h1>
      </div>
      <div className="logo_box_info">
        <button className="login-button"
          onClick={handleGoogleSignin}
        >
          Google login
        </button>
        <br />
        <button className="login-button"
          onClick={handleFacebookSignin}
        >
          Facebook login
        </button>

        <br />
        <Link to={`/logincorreo`}>
          <button className="login-button" >Login with Email</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
