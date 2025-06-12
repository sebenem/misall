import React from "react";
import style from "./Latest.module.scss";
const Latest = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h2>Latest News from all categories</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className={style.carts}>
        <div className={style.cart}>
            <div className={style.image}>
                <img src="https://preview.colorlib.com/theme/blogger/img/c2.jpg" alt="" />
            </div>
            <span>10 Jan 2018</span>
            <h3>What Makes A Hotel Boutique </h3>
        </div>
           <div className={style.cart}>
            <div className={style.image}>
                <img src="https://preview.colorlib.com/theme/blogger/img/c3.jpg" alt="" />
            </div>
            <span>10 Jan 2018</span>
            <h3>What Makes A Hotel Boutique </h3>
        </div>
           <div className={style.cart}>
            <div className={style.image}>
                <img src="https://preview.colorlib.com/theme/blogger/img/c1.jpg" alt="" />
            </div>
            <span>10 Jan 2018</span>
            <h3>What Makes A Hotel Boutique </h3>
        </div>
      </div>
    </div>
  );
};

export default Latest;
