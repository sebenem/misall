import React, { useEffect } from 'react'
import style from './BasketSection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../../../redux/reducers/basketSlice'
import BasketCard from '../../../components/cards/basketCard/BasketCard'
const BasketSection = () => {
      const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBasketThunk())
    }, [dispatch])

const basket=useSelector((state)=> state.basket.basket) || []

const deleteBasket=(item)=>{
    dispatch(deleteBasketThunk(item))
}

  return (
     <div className={style.container}>
      <div className={style.carts}>
{basket && basket.map((item)=>(
    <BasketCard key={item._id} item={item} deleteBasket={()=>deleteBasket(item._id)}/>
))}
      </div>
    </div>
  )
}

export default BasketSection
