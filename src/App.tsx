import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import BasketPage from "./Pages/Basket/BasketPage";
import ItemPage from "./Pages/Item/ItemPage";
import HomePage from "./Pages/Home/HomePage";


import { useAppDispatch } from "./redux/hooks";
import { fetchGoods } from "./redux/home/asyncActions";
import './styles/style.css';
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
