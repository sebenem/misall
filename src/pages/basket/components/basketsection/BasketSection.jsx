import React, { useEffect } from 'react'
import style from './BasketSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { deleteBasketThunk, getBasketThunk } from '../../../redux/reucers/basketSlice';
const BasketSection = () => {

  const dispatch=useDispatch()

  useEffect(() =>{
    dispatch(getBasketThunk())
  }, [])

  const basket=useSelector((state) => state.basket.basket)

const deletebasket=(data)=>{
  dispatch(deleteBasketThunk(data))
}

  return (
    <div className={style.container}>
<div className={style.text}>
  <span>Popular Item in the market</span>
  <h3>Best Sellers</h3>
</div>
<div className={style.carts}>
{basket && basket.map(item=>{
  return   <div className={style.cart}>
  <div className={style.basket}>
  <div className={style.image}>
    <img src={item.thumbnail} alt="" />
  </div>
  <div className={style.ichon}>
  <CiSearch />
  <AiOutlineShoppingCart  onClick={()=> deletebasket(item.id)}/>  
  <FaRegHeart /> 
  </div>
  </div>
  
  <h2>{item.title}</h2>
  <span>{item.price}</span>
    </div>

})}
</div>
</div>
  )
}

export default BasketSection
