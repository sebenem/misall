import React from 'react'
import style from './TrendingProduct.module.scss'
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
const TrendingProduct = () => {
  return (
    <div className={style.container}> 
    <div className={style.text}>
      <span>Popular Item in the market</span>
      <h3>Best Sellers</h3>
    </div>
    <div className={style.carts}>
      <div className={style.cart}>
<div className={style.basket}>
  <div className={style.image}>
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png" alt="" />
  </div>
  <div className={style.ichon}>
  <CiSearch />
  <AiOutlineShoppingCart />  
  <FaRegHeart /> 
  </div>
</div>
<p>Accessories</p>
<h2>Quartz Belt Watch</h2>
<span>$150.00</span>
      </div>
      <div className={style.cart}>
<div className={style.basket}>
  <div className={style.image}>
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png" alt="" />
  </div>
  <div className={style.ichon}>
  <CiSearch />
  <AiOutlineShoppingCart />  
  <FaRegHeart /> 
  </div>
</div>
<p>Accessories</p>
<h2>Quartz Belt Watch</h2>
<span>$150.00</span>
      </div>
      <div className={style.cart}>
<div className={style.basket}>
  <div className={style.image}>
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png" alt="" />
  </div>
  <div className={style.ichon}>
  <CiSearch />
  <AiOutlineShoppingCart />  
  <FaRegHeart /> 
  </div>
</div>
<p>Accessories</p>
<h2>Quartz Belt Watch</h2>
<span>$150.00</span>
      </div>
      <div className={style.cart}>
<div className={style.basket}>
  <div className={style.image}>
      <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png" alt="" />
  </div>
  <div className={style.ichon}>
  <CiSearch />
  <AiOutlineShoppingCart />  
  <FaRegHeart /> 
  </div>
</div>
<p>Accessories</p>
<h2>Quartz Belt Watch</h2>
<span>$150.00</span>
      </div>
    
     
     
    </div>
  </div>
  )
}

export default TrendingProduct
