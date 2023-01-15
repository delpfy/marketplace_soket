import React from "react";

import CatalogField from "../Components/Catalog/CatalogField";
import CategoriesField from "../Components/Categories/CategoriesField";

import MenuField from "../Components/Menu/MenuField";

import "../styles/style.css";

export const HomePage = () => {
  return (
    <div className="App">
      <MenuField />
      <body className="body">
        <CatalogField />
        <CategoriesField />
      </body>
    </div>
  );
};

export default HomePage;
