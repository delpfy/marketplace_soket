import React from "react";
import { Link } from "react-router-dom";
import socket_logo from "../../../assets/img/socket_logo.png";

import "./logo.scss";

export const Logo = () => {
  return (
    <Link to="/marketplace_soket" className="logotype_logo">
      <span className="logotype_text">Socket</span>
      <img src={socket_logo} alt="logo" className="logotype_image" />
    </Link>
  );
};

export default Logo;
