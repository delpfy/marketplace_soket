import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialiseHome } from "../../utils/InitialiseHome";
import {IItemsDisplay, HomeState} from '../types'

const initialState: HomeState = InitialiseHome();

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    SetID(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
    SetCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    SetDisplayItems(state, action: PayloadAction<IItemsDisplay[]>) {
      state.itemsDisplay = action.payload;
    },
  },
});

export const { SetID, SetCategory, SetDisplayItems } = homeSlice.actions;
export default homeSlice.reducer;
