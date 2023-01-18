import React from "react";
import { Link } from "react-router-dom";
import basket_icon from "../../assets/img/basket_icon.png";
import { useAppSelector } from "../../redux/hooks";

export const Basket = () => {
  const EXPENCES = useAppSelector((state) => state.basket.expences);
  
  return (
    <Link to={EXPENCES !== 0 ? "/marketplace_soket/basket" : ""}>
      <div className="menu__basket">
        <span className="menu__basket_text">{EXPENCES}₴</span>
        <div className="menu__basket_image_around">
          <img className="menu__basket_image" src={basket_icon} alt="basket" />
        </div>
      </div>
    </Link>
  );
};

export default Basket;
