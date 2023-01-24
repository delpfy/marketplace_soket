import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IItemsDisplay } from "../types";

export const fetchGoods = createAsyncThunk<IItemsDisplay[]>(
    'basket/fetchGoods',
    async function (){
        console.log("DATA " + 1);
        const {data} = await axios.get<IItemsDisplay[]>(`https://63b6c2204f17e3a931becf3f.mockapi.io/items`);
        console.log("DATA " + data);
        return data;
    }
);