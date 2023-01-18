import React, { useContext, useState } from "react";

import { SetCategory , SetCatalogSize} from "../../redux/home/homeSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import '../../styles/style.css';
export const CategoriesSideNav = () => {
    const [sideNavWidth, setSideNavWidth] = useState(0);
    const [arrowState, setArrowState] = useState(5);
    const [isOpened, setOpened] = useState(false);

  const CATEGORIES = useAppSelector((state) => state.home.categories);
  
  const dispatch = useAppDispatch();

  const SET_CATEGORY = (category: string) => {
    dispatch(SetCategory(category));
  };
  
  const NAV_SET = () => {
    setOpened(!isOpened);
    if(isOpened){
        setSideNavWidth(0);
        setArrowState(5);
        dispatch(SetCatalogSize(1500));
    }
    else{
        setSideNavWidth(200);
        setArrowState(205);
        dispatch(SetCatalogSize(1300));
    }
    
  }
 

  return (
    <>
      <div id="mySidenav" className="sidenav" style={{width: `${sideNavWidth}px`}}>
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
        <div className="categories__sideNav_open_bkg" style = {{marginLeft: `${arrowState}px`}}>
        <span className="categories__sideNav_open" onClick={()=>NAV_SET() }>{isOpened ? "<" : ">"}</span>
        </div>
    </>
  );
};
export default CategoriesSideNav;
