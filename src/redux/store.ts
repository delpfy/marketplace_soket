import { configureStore } from "@reduxjs/toolkit";
import basketReduser from "./basket/basketSlice";
import homeReduser from "./home/homeSlice";

const store = configureStore({
  reducer: {
    basket: basketReduser,
    home: homeReduser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
