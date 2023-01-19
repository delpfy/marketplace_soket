import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialiseHome } from "../../utils/InitialiseHome";
import {IItemsDisplay, HomeState} from '../types'
import { fetchGoods } from "./asyncActions";

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
    SetCatalogSize(state, action: PayloadAction<number>){
      state.catalogSize = action.payload;
    },
    SetNavState(state, action: PayloadAction<boolean>){
      
        state.isOpened = action.payload;
      
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.itemsDisplay = action.payload;
    });

  }});

export const { SetID, SetCategory, SetDisplayItems,SetCatalogSize,SetNavState} = homeSlice.actions;
export default homeSlice.reducer;
