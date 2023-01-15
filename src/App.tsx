import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage";
import BasketPage from "./Pages/BasketPage";
import ItemPage from "./Pages/ItemPage";
import HomePage from "./Pages/HomePage";

import "./styles/style.css";
import { SetDisplayItems } from "./redux/home/homeSlice";
import { useAppDispatch } from "./redux/hooks";
import {IItemsDisplay} from './redux/types'


function App() {
  const dispatch = useAppDispatch();
  
  const SET_DISPLAY_ITEMS = (items: IItemsDisplay[]) => {
    dispatch(SetDisplayItems(items));
  };

  useEffect(() => {
    fetch("https://63b6c2204f17e3a931becf3f.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        SET_DISPLAY_ITEMS(json);
      });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/item" element={<ItemPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
