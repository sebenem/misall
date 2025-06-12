import React from 'react'
import style from './Footer.module.scss'
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={style.conatiner}>
      <div className={style.text}>
        <span>Copyright ©2025 All rights reserved | This template is made with <FaHeart /> by Colorlib</span>
      </div>
    </div>
  )
}

export default Footer
