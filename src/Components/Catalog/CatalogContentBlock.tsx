import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { SetID } from "../../redux/home/homeSlice";

import {
  IncExpences,
  AddItem,
  AddItemAmount,
} from "../../redux/basket/basketSlice";

import "../../styles/style.css";
import { IItems, IItemsAmount } from "../../redux/types";

export const CatalogContentBlock = (props:any) => {
  const ITEMS_AMOUNT = useAppSelector((state) => state.basket.itemsAmount);
  const ITEMS = useAppSelector((state) => state.basket.items);
  const dispatch = useAppDispatch();
  

  const INC_EXPENCES = (price: number) => {
    dispatch(IncExpences(price));
  };

  const PUSH_AMOUNT_ITEMS = (item: IItemsAmount) => {
    dispatch(AddItemAmount(item));
  };

  const PUSH_ITEMS = (item:IItems) => {
    dispatch(AddItem(item));
  };

  const Add_Item = () => {
    INC_EXPENCES(props.price);

    const Item_Entry = ITEMS.filter((el) => el.props.id === props.id);
    const ItemAmount_Entry = ITEMS_AMOUNT.filter((el) => el.id === props.id);

    if (Item_Entry.length === 0) {
      PUSH_ITEMS({ props, amount: 1 });
      PUSH_AMOUNT_ITEMS({ id: props.id, amount: 1 });
    } else {
      PUSH_AMOUNT_ITEMS({ id: props.id, amount: ItemAmount_Entry.length + 1 });
    }
  };

  return (
    <>
      <div
        onClick={() => dispatch(SetID(props.id))}
        className="catalog__body_block"
      >
        <Link to="/item" className="link">
          <img
            className="catalog_item_image"
            src={props.image[0]}
            alt={props.name}
          />
        </Link>
        <div className="catalog_item_name">
          <h1 className="catalog_item_name_text">{props.name}</h1>
        </div>
        <div className="catalog_item_price">{props.price}₴</div>

        <div className="catalog_item_add" onClick={() => Add_Item()}>
          {" "}
          Додати до кошика{" "}
        </div>
      </div>
    </>
  );
};

export default CatalogContentBlock;
