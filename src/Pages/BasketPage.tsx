import React from "react";
import BasketItemBlock from "../Components/BasketElements/BasketItemBlock";
import MenuField from "../Components/Menu/MenuField";
import { useAppSelector } from "../redux/hooks";

import "../styles/style.css";
export const BasketPage = () => {
  const BASKET_ITEMS = useAppSelector((state) => state.basket.items);
  
  return (
    <div>
      <MenuField />
      <div className="basket__body">
        <div className="basket__body_content">
          <div>
            {BASKET_ITEMS.map((item) => {
              return <BasketItemBlock key={item.props.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
