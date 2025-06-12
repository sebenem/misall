import productModel from "../models/productModel.js"

 const getProduct=async (req,res)=>{
    const products=await productModel.find()
    res.json(products);
}
 const postProduct=async (req,res)=>{
    const newproducts=req.body
    await productModel.create(newproducts)
    res.json(newproducts);
}
const deleteProduct=async (req,res)=>{
    const {id}=req.params
    await productModel.findByIdAndDelete(id)
    res.json('silindiii');
}

export {getProduct, postProduct, deleteProduct}