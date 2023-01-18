import React, { useState } from "react";

import {
  IncExpences,
  AddItem,
  AddItemAmount,
} from "../../redux/basket/basketSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { IItems, IItemsAmount } from "../../redux/types";

import "../../styles/style.css";

export const Item = (props: any) => {
  const [imageIndex, setImageIndex] = useState(0);
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
      <div className="item__body">
        <div className="item__body_image_block">
        <div
          onClick={() =>
            setImageIndex(imageIndex - 1 !== -1 ? imageIndex - 1 : imageIndex)
          }
          className="item__body_image_changeBackward"
        >
          <button className="item__body_image_changeBackward_button">
            {" "}
            {"<"}{" "}
          </button>
        </div>
        <img
          className="item__body_image"
          src={props.image[imageIndex]}
          alt={props.name}
        ></img>
        <div
          onClick={() =>
            setImageIndex(imageIndex + 1 !== 3 ? imageIndex + 1 : imageIndex)
          }
          className="item__body_image_changeForward"
        >
          <button className="item__body_image_changeForward_button">
            {" "}
            {">"}{" "}
          </button>
        </div>
        </div>
       
        <div className="item__body_subcontent">
          <h1 className="item__body_subcontent_name">{props.name}</h1>
          <h1 className= "item__body_subcontent_price">₴ {props.price}</h1>
          <p className="item__body_subcontent_description">{props.description}</p>
          
            <div className="item__body_basketButtonBlock">
              <button className="item__body_basketButton" onClick={() => Add_Item()}>Додати до кошика</button>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Item;
