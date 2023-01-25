import React from "react";
import { Link } from "react-router-dom";
import basket_icon from "../../../assets/img/basket_icon.png";
import { useAppSelector } from "../../../redux/hooks";
import './basket.scss';
export const Basket = () => {
  const EXPENCES = useAppSelector((state) => state.basket.expences);

  return (
    <Link to={EXPENCES !== 0 ? "/marketplace_soket/basket" : "/marketplace_soket"}>
      <div className="basket">
        <span className="text">{EXPENCES}₴</span>
        <div className="basket_image_around">
          <img className="basket_image" src={basket_icon} alt="basket" />
        </div>
      </div>
    </Link>
  );
};

export default Basket;
