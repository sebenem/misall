import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk=createAsyncThunk('api/gebasketproducts', async ()=>{
    const res=await axios.get('https://68069ed8e81df7060eb7b75b.mockapi.io/api/v1/data')
    return res.data;
})

export const deleteBasketThunk=createAsyncThunk('api/postproducts', async (id)=>{
    const res=await axios.delete(`https://68069ed8e81df7060eb7b75b.mockapi.io/api/v1/data/${id}`)
    return id
})

export const basketSlice=createSlice({
    name: 'basket',
    initialState:{
        basket:[],
    },
    extraReducers: builder =>{
builder
.addCase(getBasketThunk.fulfilled, (state,action)=>{
    state.basket=action.payload
})
.addCase(deleteBasketThunk.fulfilled, (state,action)=>{
    state.basket.filter((item)=> item.id !== action.payload)
})

    }
})

export default basketSlice.reducer