import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Vector.png";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="container logoBox">
      <div className="logoIcon">
        <img src={logo} alt="logo" />
      </div>
      <div className="logo_box_info">
        <Link to={`/registroemail`}>
          <button>Sign Up with Email</button>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
