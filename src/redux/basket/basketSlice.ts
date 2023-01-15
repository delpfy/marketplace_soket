import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialiseBasket } from "../../utils/InitialiseBasket";
import { BasketState, IItemsAmount, IItems } from "../types";

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

    SetAmountItems(state, action: PayloadAction<IItemsAmount[]>) {
      state.itemsAmount = action.payload;
    },

    AddItem(state, action: PayloadAction<IItems>) {
      state.items.push(action.payload);
    },

    RemoveItem(state, action: PayloadAction<IItems>) {
      state.items = state.items.filter(
        (el) => el.props.id !== action.payload.props.id
      );
    },

    AddItemAmount(state, action: PayloadAction<IItemsAmount>) {
      state.itemsAmount.push(action.payload);
    },

    RemoveItemAmount(state, action: PayloadAction<IItems>) {
      state.itemsAmount = state.itemsAmount.filter(
        (el) => el.id !== action.payload.props.id
      );
    },
  },
});

export const {
  IncExpences,
  DecExpences,
  AddItem,
  RemoveItem,
  AddItemAmount,
  RemoveItemAmount,
  SetAmountItems,
} = basketSlice.actions;
export default basketSlice.reducer;
