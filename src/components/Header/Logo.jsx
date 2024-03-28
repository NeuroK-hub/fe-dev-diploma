import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Logo = () => {
  return (
    <React.Fragment>
      <Link to="/fe-dev-diploma" className="logo-container" id="startLogo">
        Лого
      </Link>
    </React.Fragment>
  );
};

export default Logo;