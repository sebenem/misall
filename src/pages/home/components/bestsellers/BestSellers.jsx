import React, { useEffect } from 'react'
import style from './BestSellers.module.scss'
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getproductsThunk, postproductsThunk } from '../../../redux/reucers/bestsellersSlice';
const BestSellers = () => {

  const dispatch=useDispatch()

  useEffect(() =>{
    dispatch(getproductsThunk())
  }, [])

  const products=useSelector((state) => state.products.products)
const adtobasket=(data) =>{
  dispatch(postproductsThunk(data))
}

  return (
<div className={style.container}>
<div className={style.text}>
  <span>Popular Item in the market</span>
  <h3>Best Sellers</h3>
</div>
<div className={style.carts}>
{products && products.map(item=>{
  return   <div className={style.cart}>
  <div className={style.basket}>
  <div className={style.image}>
    <img src={item.thumbnail} alt="" />
  </div>
  <div className={style.ichon}>
  <CiSearch />
  <AiOutlineShoppingCart  onClick={()=> adtobasket(item)}/>  
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

export default BestSellers

{/* <div className={style.container}> 
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
  <div className={style.cart}>
<div className={style.basket}>
<div className={style.image}>
  <img src="https://preview.colorlib.com/theme/aroma/img/product/product5.png" alt="" />
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
  <img src="https://preview.colorlib.com/theme/aroma/img/product/product6.png" alt="" />
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
  <img src="https://preview.colorlib.com/theme/aroma/img/product/product7.png" alt="" />
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
  <img src="https://preview.colorlib.com/theme/aroma/img/product/product8.png" alt="" />
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
</div> */}