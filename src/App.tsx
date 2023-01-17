import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage";
import BasketPage from "./Pages/BasketPage";
import ItemPage from "./Pages/ItemPage";
import HomePage from "./Pages/HomePage";

import "./styles/style.css";
import { useAppDispatch } from "./redux/hooks";
import { fetchGoods } from "./redux/home/asyncActions";


function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchGoods());
  }, []);

  return (
    <Routes>
      <Route path="/marketplace_soket" element={<HomePage />} />
      <Route path="/marketplace_soket/item" element={<ItemPage />} />
      <Route path="/marketplace_soket/basket" element={<BasketPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
