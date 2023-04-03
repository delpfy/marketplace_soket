import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialiseBasket } from "../../utils/InitialiseBasket";
import { BasketState, IBasketItemsDisplay, IBasketItems, IItems } from "../types";

const initialState: BasketState = InitialiseBasket();

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    IncExpences(state, action: PayloadAction<number>) {
      state.expences += action.payload;
    },
    DecExpences(state, action: PayloadAction<number>) {
      state.expences -= action.payload;
    },

  },
});

export const {
  IncExpences,
  DecExpences,
} = basketSlice.actions;
export default basketSlice.reducer;
