import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductThunk=createAsyncThunk('api/getproduct', async()=>{
    const res=await axios.get('http://localhost:5400/products')
    return res.data;
})

export const postProductThunk=createAsyncThunk('api/postproduct', async(data)=>{
    const res=await axios.post('http://localhost:5400/products',data)
    return res.data;
})

export const deleteProductThunk=createAsyncThunk('api/deleteproduct', async(id)=>{
    const res=await axios.delete(`http://localhost:5400/products/${id}`)
    return id;
})


export const productSlice=createSlice({
    name: 'products',
    initialState: {
        products:[],
    },
    extraReducers: builder=>{
        builder
        .addCase(getProductThunk.fulfilled, (state,action)=>{
            state.products=action.payload
            state.loading=false
        })
         .addCase(getProductThunk.rejected, (state,action)=>{
            state.loading=false
        })
         .addCase(getProductThunk.pending, (state,action)=>{
            state.loading=true
        })
          .addCase(postProductThunk.fulfilled, (state,action)=>{
            state.products.push(action.payload)
            state.loading=false
        })
         .addCase(postProductThunk.rejected, (state,action)=>{
            state.loading=false
        })
         .addCase(postProductThunk.pending, (state,action)=>{
            state.loading=true
        })
          .addCase(deleteProductThunk.fulfilled, (state,action)=>{
            state.products=state.products.filter((item)=> item._id !== action.payload)
            state.loading=false
        })
         .addCase(deleteProductThunk.rejected, (state,action)=>{
            state.loading=false
        })
         .addCase(deleteProductThunk.pending, (state,action)=>{
            state.loading=true
        })
    }
})

export default productSlice.reducer