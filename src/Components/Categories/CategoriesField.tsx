import React from "react";

import { SetCategory } from "../../redux/home/homeSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import "../../styles/style.css";

export const CategoriesField = () => {
  const CATEGORIES = useAppSelector((state) => state.home.categories);
  const dispatch = useAppDispatch();
  
  const SET_CATEGORY = (category: string) => {
    dispatch(SetCategory(category));
  };

  return (
    <div className="categories">
      <ul className="categories__items">
        {CATEGORIES.map((category) => (
          <h1
            className="categories__items_item"
            key={category.id}
            onClick={() => SET_CATEGORY(category.name)}
          >
            {category.name}
          </h1>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesField;
