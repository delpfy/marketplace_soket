import React from "react";
import MenuField from "../Components/Menu/MenuField";
import Item from "../Components/ItemElements/Item";
import { useAppSelector } from "../redux/hooks";

export const ItemPage = () => {
  const SELECTED_ID = useAppSelector((state) => state.home.id);
  const DISPLAY_ITEMS = useAppSelector((state) => state.home.itemsDisplay);
  
  
  return (
    <div>
      <MenuField />
      <div>
        {DISPLAY_ITEMS.map((item) => {
          if (item.id === SELECTED_ID) {
            return <Item key={item.id} {...item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ItemPage;
