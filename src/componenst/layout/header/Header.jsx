import React from 'react'
import style from './Header.module.scss'
import { CiSearch } from "react-icons/ci";
import { TfiShoppingCart } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
      </div>
      <div className={style.navbar}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Pages</a></li>
            <li><a href="/admin">ADMIN</a></li>
        </ul>
      </div>
      <div className={style.ichon}>
      <CiSearch />
      <Link to='/basket'>
       <TfiShoppingCart />
      </Link>
     
      </div>
      <div className={style.batn}>
        <button>Buy Now</button>
      </div>
      <div className={style.menu}>
      <GiHamburgerMenu />
      </div>
    </div>
  )
}

export default Header
