import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBasketThunk=createAsyncThunk('api/getbasket', async()=>{
    const res=await axios.get('http://localhost:5400/basket')
    return res.data;
})

export const postBasketThunk=createAsyncThunk('api/postbasket', async(data)=>{
    const res=await axios.post('http://localhost:5400/basket',data)
    return res.data;
})

export const deleteBasketThunk=createAsyncThunk('api/deletebasket', async(id)=>{
    const res=await axios.delete(`http://localhost:5400/basket/${id}`)
    return id;
})


export const basketSlice=createSlice({
    name: 'basket',
    initialState: {
        basket:[],
    },
    extraReducers: builder=>{
        builder
        .addCase(getBasketThunk.fulfilled, (state,action)=>{
            state.basket=action.payload
            state.loading=false
        })
         .addCase(getBasketThunk.rejected, (state,action)=>{
            state.loading=false
        })
         .addCase(getBasketThunk.pending, (state,action)=>{
            state.loading=true
        })
          .addCase(postBasketThunk.fulfilled, (state,action)=>{
            state.basket.push(action.payload)
            state.loading=false
        })
         .addCase(postBasketThunk.rejected, (state,action)=>{
            state.loading=false
        })
         .addCase(postBasketThunk.pending, (state,action)=>{
            state.loading=true
        })
          .addCase(deleteBasketThunk.fulfilled, (state,action)=>{
            state.basket=state.basket.filter((item)=> item._id !== action.payload)
            state.loading=false
        })
         .addCase(deleteBasketThunk.rejected, (state,action)=>{
            state.loading=false
        })
         .addCase(deleteBasketThunk.pending, (state,action)=>{
            state.loading=true
        })
    }
})

export default basketSlice.reducer