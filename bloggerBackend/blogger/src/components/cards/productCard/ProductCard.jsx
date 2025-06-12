import React from 'react'
import style from './ProductCard.module.scss'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({item, addBasket}) => {
  const navigation=useNavigate()
  const goDetail=(item)=>{
    navigation('/detail', {state:item})
  }
  return (
    <div className={style.cart}>
      <img src={item.image} alt="" onClick={()=>goDetail(item)} />
      <p>{item.title}</p>
      <span>{item.price}</span>
      <button onClick={addBasket}>Add Basket</button>
    </div>
  )
}

export default ProductCard
