import React from "react";

import "../../styles/style.css";
import { useAppSelector } from "../../redux/hooks";
import CatalogTestBlock from "./CatalogTestBlock";

export const CatalogField = () => {
  const SELECTED_CATEGORY = useAppSelector((state) => state.home.category);
  const DISPLAY_ITEMS = useAppSelector((state) => state.home.itemsDisplay);
  const CATALOG_SIZE = useAppSelector((state) => state.home.catalogSize);
  const Items = DISPLAY_ITEMS.filter((el) => el.category === SELECTED_CATEGORY);
  
  return (
    <>
      <div className="catalog" style={{width: `${CATALOG_SIZE}px`}}>
        <div className="catalog__head">
          <div className="catalog__head_category">
            <strong> {SELECTED_CATEGORY} </strong>
          </div>
        </div>
        <div className="catalog__body">
          {Items.map((item) => (
            <CatalogTestBlock key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogField;
