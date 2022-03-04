import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/Vector.png";
import "../../../index.css";
import "./SignIn.scss";

const SignIn = () => {
  return (
    <div className="signinCtn">
      <div className="logoIcon">
        <img src={logo} alt="logo" />
      </div>
      <div className="btnCtn">
        <NavLink to={`/login`}>
          <button>Login</button>
        </NavLink>
        <NavLink to={`/registro`}>
          <button>Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SignIn;
