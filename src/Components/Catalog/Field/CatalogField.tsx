import React from "react";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { SetNavState } from "../../../redux/home/homeSlice";
import CatalogTestBlock from "../Block/CatalogTestBlock";

import "./catalogfield.scss";

export const CatalogField = () => {
  const SELECTED_CATEGORY = useAppSelector((state) => state.home.category);
  const DISPLAY_ITEMS = useAppSelector((state) => state.home.itemsDisplay);
  const CATALOG_SIZE = useAppSelector((state) => state.home.catalogSize);
  const IS_OPENED = useAppSelector((state) => state.home.isOpened);
  const Items = DISPLAY_ITEMS.filter((el) => el.category === SELECTED_CATEGORY);

  const dispatch = useAppDispatch();

  const SET_NAV_STATE = () => {
    if (IS_OPENED) {
      dispatch(SetNavState(false));
    }
  };

  return (
    <div
      className="catalog"
      style={{ width: `${CATALOG_SIZE}%` }}
      onClick={() => SET_NAV_STATE()}
    >
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
  );
};

export default CatalogField;
