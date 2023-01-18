import React, { useState } from "react";

import CatalogField from "../Components/Catalog/CatalogField";
import CategoriesField from "../Components/Categories/CategoriesField";
import CategoriesSideNav from "../Components/Categories/CategoriesSideNav";

import MenuField from "../Components/Menu/MenuField";

import "../styles/style.css";

export const HomePage = () => {
  return (
    <div className="App">
      <MenuField />
      <body className="body">
        <CatalogField />
        <CategoriesSideNav />
      </body>
    </div>
  );
};

export default HomePage;
