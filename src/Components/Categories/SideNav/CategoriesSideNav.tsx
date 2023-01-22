import React, { useEffect, useState } from "react";

import {
  SetCategory,
  SetCatalogSize,
  SetNavState,
} from "../../../redux/home/homeSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import './sidenav.scss';
export const CategoriesSideNav = () => {
  const [sideNavWidth, setSideNavWidth] = useState(0);
  const [arrowState, setArrowState] = useState(5);

  const CATEGORIES = useAppSelector((state) => state.home.categories);
  const IS_OPENED = useAppSelector((state) => state.home.isOpened);
  const dispatch = useAppDispatch();

  const SET_CATEGORY = (category: string) => {
    dispatch(SetCategory(category));
  };

  const SET_NAV_STATE = () => {
    dispatch(SetNavState(!IS_OPENED));
  };

  const NAV_SET = () => {
    if (IS_OPENED) {
      setSideNavWidth(0);
      setArrowState(5);
      dispatch(SetCatalogSize(1500));
    } else {
      setSideNavWidth(200);
      setArrowState(205);
      dispatch(SetCatalogSize(1300));
    }
    SET_NAV_STATE();
  };

  useEffect(() => {
    if (!IS_OPENED) {
      setSideNavWidth(0);
      setArrowState(5);
      dispatch(SetCatalogSize(1500));
    }
  }, [IS_OPENED]);

  return (
    <>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: `${sideNavWidth}px` }}
      >
        {CATEGORIES.map((category) => (
          <h1
            className="categories__items_item"
            key={category.id}
            onClick={() => SET_CATEGORY(category.name)}
          >
            {category.name}
          </h1>
        ))}
      </div>
      <div
        className="categories__sideNav_open_bkg"
        style={{ marginLeft: `${arrowState}px` }}
      >
        <span className="categories__sideNav_open" onClick={() => NAV_SET()}>
          {IS_OPENED ? "<" : ">"}
        </span>
      </div>
    </>
  );
};
export default CategoriesSideNav;
