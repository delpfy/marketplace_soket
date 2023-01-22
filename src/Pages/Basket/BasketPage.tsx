import React from "react";
import BasketItemBlock from "../../Components/BasketElements/Item/BasketItemBlock";
import MenuField from "../../Components/Menu/MenuArea/MenuField";
import { useAppSelector } from "../../redux/hooks";

import "./basketpage.scss";
export const BasketPage = () => {
  const BASKET_ITEMS = useAppSelector((state) => state.basket.items);

  return (
    <>
      <MenuField />
      <div className="basket_background">
        <div className="body">
          <div className="content">
            <div>
              {BASKET_ITEMS.map((item) => {
                return <BasketItemBlock key={item.props.id} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
