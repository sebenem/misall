import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAdminThunk=createAsyncThunk('api/getadmin', async() =>{
    const res=await axios.get('https://68069ed8e81df7060eb7b75b.mockapi.io/api/v1/data')
    return res.data;
    })

    export const postAdminThunk=createAsyncThunk('api/postadmin', async(data) =>{
        const res=await axios.post('https://68069ed8e81df7060eb7b75b.mockapi.io/api/v1/data',data)
        return res.data;
        })

        export const deleteAdminThunk=createAsyncThunk('api/deleteadmin', async(id) =>{
            const res=await axios.delete(`https://68069ed8e81df7060eb7b75b.mockapi.io/api/v1/data/${id}`)
            return id
            })

export const adminSlice=createSlice({
    name: 'admin',
    initialState:{
        admin:[],
    },
    extraReducers:builder => {
builder
.addCase(getAdminThunk.fulfilled, (state,action) =>{
    state.admin=action.payload
   })  
   .addCase(deleteAdminThunk.fulfilled, (state,action) =>{
       state.admin.filter((item)=>item.id !== action.payload)
      }) 
      .addCase(postAdminThunk.fulfilled, (state,action)=>{
      state.admin.push(action.payload)
      })
    }
})

export default adminSlice.reducer