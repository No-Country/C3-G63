import React from "react";
import './NoMatch.scss';
import { Link } from "react-router-dom";

const NoMatch = () => {

  return (
    <div className="container">
      <div className="content">
        <h1>404</h1>
        <h2>The requested URL doesn't exist</h2>
        <Link to="/" className="back-btn">Go Back</Link>
      </div>
    </div>
  );
};

export default NoMatch;