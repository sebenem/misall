import { configureStore } from "@reduxjs/toolkit";
import  bestsellersSlice  from "./reucers/bestsellersSlice";
import  basketSlice  from "./reucers/basketSlice";
import  adminSlice  from "./reucers/adminSlice";

export const store=configureStore({
    reducer:{
        products:bestsellersSlice,
        basket:basketSlice,
        admin:adminSlice
    }
})