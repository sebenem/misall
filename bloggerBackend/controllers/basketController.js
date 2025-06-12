import basketModel from "../models/basketModel.js";


 const getBasket=async (req,res)=>{
    const basket=await basketModel.find()
    res.json(basket);
}
 const postBasket=async (req,res)=>{
    const newbasket=req.body
    await basketModel.create(newbasket)
    res.json(newbasket);
}
const deleteBasket=async (req,res)=>{
    const {id}=req.params
    await basketModel.findByIdAndDelete(id)
    res.json('silindiii basketden');
}

export {getBasket, postBasket, deleteBasket}