import React from "react";
import { Link } from "react-router-dom";


const WelcomeHeader = () => {
  return (
    <div className="welcome-header-wrapper">
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default WelcomeHeader;
