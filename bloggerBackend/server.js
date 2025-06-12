import express from 'express'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import ProductRouter from './router/productRouter.js'
import BasketRouter from './router/basketRouter.js'
import { connectDB } from './config/config.js'
configDotenv()
export const app=express()
app.use(cors('*'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=5400
connectDB()
app.use("/products",ProductRouter)
app.use("/basket",BasketRouter)
app.listen(PORT, ()=>{
    console.log(`bakend ${PORT}isleyir`);
    
})
