
import mongoose from "mongoose";
import { log } from "util";
 export const connectDB= async (req,res)=>{
    const connect=await mongoose.connect(process.env.mongoUrl)
    console.log(connect.connection.host);
    
 }