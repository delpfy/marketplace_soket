import React, { useState } from "react";

import CatalogField from "../../Components/Catalog/Field/CatalogField";
import CategoriesSideNav from "../../Components/Categories/SideNav/CategoriesSideNav";

import MenuField from "../../Components/Menu/MenuArea/MenuField";

import "./homepage.scss";

export const HomePage = () => {
  return (
    <div className="App">
      <MenuField />
      <body className="home_body">
        <CatalogField />
        <CategoriesSideNav />
      </body>
    </div>
  );
};

export default HomePage;
