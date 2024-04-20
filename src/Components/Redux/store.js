import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/LikeCount";
export const store=configureStore({
    reducer:{
        counter:CounterSlice,
    },
})