import React from 'react'
import style from './BasketCard.module.scss'
const BasketCard = ({item, deleteBasket}) => {
  return (
   <div className={style.cart}>
      <img src={item.image} alt="" />
      <p>{item.title}</p>
      <span>{item.price}</span>
      <button onClick={deleteBasket}>Delete</button>
    </div>
  )
}

export default BasketCard
