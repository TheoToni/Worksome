import React from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <p>Created by Theo.JS</p>
    </div>
  );
}

export default Logo;
