import React from "react";
import { useSelector } from "react-redux";
import CatalogContentBlock from "./CatalogContentBlock";

import "../../styles/style.css";
import { useAppSelector } from "../../redux/hooks";

export const CatalogField = () => {
  const SELECTED_CATEGORY = useAppSelector((state) => state.home.category);
  const DISPLAY_ITEMS = useAppSelector((state) => state.home.itemsDisplay);
  const Items = DISPLAY_ITEMS.filter((el) => el.category === SELECTED_CATEGORY);
  
  return (
    <div>
      <div className="catalog">
        <div className="catalog__head">
          <div className="catalog__head_category">
            <strong> {SELECTED_CATEGORY} </strong>
          </div>
        </div>
        <div className="catalog__body">
          {Items.map((item) => (
            <CatalogContentBlock key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogField;
