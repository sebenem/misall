import React from 'react'
import style from './LatestNews.module.scss'
const LatestNews = () => {
  return (
    <div className={style.container}>
       <div className={style.text}>
      <span>Popular Item in the market</span>
      <h3>Latest News</h3>
    </div>
    <div className={style.carts}>
      <div className={style.cart}>
<div className={style.basket}>
  <div className={style.image}>
      <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="" />
  </div>

</div>

<h2>The Richland Center Shooping News and weekly shooper</h2>
<p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
<span>Read More </span>
      </div>
      <div className={style.cart}>
<div className={style.basket}>
  <div className={style.image}>
      <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png" alt="" />
  </div>

</div>

<h2>The Shopping News also offers top-quality printing services</h2>
<p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
<span>Read More </span>
      </div>
      <div className={style.cart}>
<div className={style.basket}>
  <div className={style.image}>
      <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png" alt="" />
  </div>

</div>

<h2>Professional design staff and efficient equipment you’ll find we offer</h2>
<p>Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.</p>
<span>Read More </span>
      </div>   
    </div>
    </div>
  )
}

export default LatestNews
