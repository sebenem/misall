import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getproductsThunk=createAsyncThunk('api/getproducts', async ()=>{
    const res=await axios.get('https://dummyjson.com/products')
    return res.data.products;
})

export const postproductsThunk=createAsyncThunk('api/postproducts', async (data)=>{
    const res=await axios.post('https://68069ed8e81df7060eb7b75b.mockapi.io/api/v1/data',data)
    return res.data;
})


export const bestsellersSlice=createSlice({
    name: 'products',
    initialState:{
        products:[],
    },
    extraReducers: builder => {
        builder

        .addCase(getproductsThunk.fulfilled, (state,action) =>{
            state.loading=false
             state.products=action.payload
            })
            .addCase(getproductsThunk.pending, (state,action)=>{
                state.loading=true
            })  
            .addCase(getproductsThunk.rejected, (state,action)=>{
                state.loading=false
                state.error=action.error.message
            })
            .addCase(postproductsThunk.fulfilled, (state,action) =>{
                state.loading=false
                state.products.push(action.payload)
               }) 
               .addCase(postproductsThunk.pending, (state,action)=>{
                state.loading=true
               })
               .addCase(postproductsThunk.rejected, (state,action)=>{
                state.loading=false
                state.error=action.error.message
               })
         }
})

export default bestsellersSlice.reducer