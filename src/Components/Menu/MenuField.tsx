import React from "react";

import Logo from "./Logo";

import "../../styles/style.css";
import Basket from "./Basket";
import Search from "./Search";

export const MenuField = () => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <Logo />
          <Search />
          <Basket />
        </div>
      </div>
    </>
  );
};

export default MenuField;
