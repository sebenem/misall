import React, { useEffect } from 'react'
import style from './ProductsSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../../redux/reducers/productSlice'
import { postBasketThunk } from '../../../../redux/reducers/basketSlice'
import ProductCard from '../../../../components/cards/productCard/ProductCard'
const ProductsSection = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductThunk())
    }, [dispatch])

const products=useSelector((state)=> state.products.products) || []

const addBasket=(item)=>{
    dispatch(postBasketThunk(item))
}

  return (
    <div className={style.container}>
      <div className={style.carts}>
{products && products.map((item)=>(
    <ProductCard key={item._id} item={item} addBasket={()=>addBasket(item)}/>
))}
      </div>
    </div>
  )
}

export default ProductsSection
