import React, { useState } from "react";
import { Link } from "react-router-dom";

import cross_sign from "../../../assets/img/cross_sign.png";
import append_icon from "../../../assets/img/append_icon.png";
import reduce_icon from "../../../assets/img/reduce_icon.png";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IItems, IItemsAmount } from "../../../redux/types";
import { SetID, SetCategory } from "../../../redux/home/homeSlice";
import {
  IncExpences,
  DecExpences,
  RemoveItem,
  AddItemAmount,
  RemoveItemAmount,
  SetAmountItems,
} from "../../../redux/basket/basketSlice";

import "./basketitem.scss";

export const BasketItemBlock = ({ item }: any) => {
  const ITEMS_AMOUNT = useAppSelector((state) => state.basket.itemsAmount);
  const ITEMS = useAppSelector((state) => state.basket.items);

  const dispatch = useAppDispatch();

  const [images] = useState(item.props.image);

  const INC_EXPENCES = (price: number) => {
    dispatch(IncExpences(price));
  };

  const DEC_EXPENCES = (price: number) => {
    dispatch(DecExpences(price));
  };

  const PUSH_AMOUNT_ITEMS = (item: IItemsAmount) => {
    dispatch(AddItemAmount(item));
  };

  const POP_AMOUNT_ITEMS = (item: IItems) => {
    dispatch(RemoveItemAmount(item));
  };

  const POP_ITEMS = (item: IItems) => {
    dispatch(RemoveItem(item));
  };

  const SET_AMOUNT_ITEMS = (items: IItemsAmount[]) => {
    dispatch(SetAmountItems(items));
  };

  const Remove_Item = () => {
    DEC_EXPENCES(
      item.props.price *
        ITEMS_AMOUNT.filter((el) => el.id === item.props.id).length
    );
    POP_ITEMS(item);
    POP_AMOUNT_ITEMS(item);
  };

  const Append_ItemAmount = () => {
    INC_EXPENCES(item.props.price);
    PUSH_AMOUNT_ITEMS({
      id: item.props.id,
      amount: ITEMS_AMOUNT.filter((el) => el.id === item.props.id).length + 1,
    });
  };

  const Reduce_ItemAmount = () => {
    if (ITEMS_AMOUNT.filter((el) => el.id === item.props.id).length === 1) {
      Remove_Item();
    } else {
      DEC_EXPENCES(item.props.price);

      SET_AMOUNT_ITEMS(ITEMS_AMOUNT.filter((el) => Filter(el)));
    }
  };

  const Filter = (elem: IItemsAmount) => {
    const itemAmount = ITEMS_AMOUNT.filter(
      (el) => el.id === item.props.id
    ).length;

    if (elem.id === item.props.id) {
      if (elem.amount !== itemAmount) {
        return elem;
      }
    } else {
      return elem;
    }
  };

  return (
    <div className="item_body">
      <Link
        to="/marketplace_soket/item"
        className="item_link"
        onClick={() => {
          dispatch(SetCategory(item.props.category));
          dispatch(SetID(item.props.id));
        }}
      >
        <img src={images[0]} className="images" />
        <div className="info">
          <div className="info_name"> Назва: {item.props.name} </div>
          <div>Ціна: {item.props.price} </div>
          <div>
            У кошику:{" "}
            {ITEMS_AMOUNT.filter((el) => el.id === item.props.id).length}
          </div>
        </div>
      </Link>
      <div className="AppendReduseCross">
        <div className="AppendReduse">
          <div className="plus_bkgr">
            <img
              className="plus"
              src={append_icon}
              alt="plus"
              onClick={() => Append_ItemAmount()}
            />
          </div>

          <div className="minus_bkgr">
            <Link
              to={
                ITEMS_AMOUNT.length === 1
                  ? "/marketplace_soket"
                  : "/marketplace_soket/basket"
              }
              className="minus_link"
            >
              <img
                className="minus"
                src={reduce_icon}
                alt="minus"
                onClick={() => Reduce_ItemAmount()}
              />
            </Link>
          </div>
        </div>

        <div className="cross">
          <Link
            to={
              ITEMS.length === 1
                ? "/marketplace_soket"
                : "/marketplace_soket/basket"
            }
            className="cross_link"
          >
            <img src={cross_sign} alt="cross" onClick={() => Remove_Item()} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketItemBlock;
