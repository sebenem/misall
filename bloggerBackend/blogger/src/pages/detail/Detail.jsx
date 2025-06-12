import React from 'react'
import style from './Detail.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
const Detail = () => {
   const navigation=useNavigate()
   const location=useLocation()
   const item=location.state
  return (
    <div className={style.container}>
      {item ? <div className={style.cart}>
<img src={item.image} alt="" />
<p>{item.tutle}</p>
<span>{item.price}</span>
<button onClick={()=>navigation('/')}>Go Home</button>
      </div> : <p>Melumat Yoxdur</p> }
    </div>
  )
}

export default Detail
