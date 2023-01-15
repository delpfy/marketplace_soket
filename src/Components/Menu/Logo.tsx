import React from "react";
import { Link } from "react-router-dom";
import socket_logo from "../../assets/img/socket_logo.png";

import "../../styles/style.css";

export const Logo = () => {
  return (
    <Link to="/" className="menu__logo">
      <span className="menu__logo_text">Socket</span>
      <img src={socket_logo} alt="logo" className="menu__logo_image" />
    </Link>
  );
};

export default Logo;
