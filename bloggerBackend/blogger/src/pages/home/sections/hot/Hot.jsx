import React from "react";
import style from "./Hot.module.scss";
const Hot = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h2>Hot topics from Travel Section</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </span>
      </div>
      <div className={style.carts}>
        <div className={style.cart}>
          <div className={style.image}>
          <img src="https://preview.colorlib.com/theme/blogger/img/t1.jpg" alt="" />
          </div>
         <div className={style.intro}>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <span>inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</span>
         </div>
        </div>
          <div className={style.cart}>
          <div className={style.image}>
          <img src="https://preview.colorlib.com/theme/blogger/img/t2.jpg" alt="" />
          </div>
         <div className={style.intro}>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <span>inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</span>
         </div>
        </div>
          <div className={style.cart}>
          <div className={style.image}>
          <img src="https://preview.colorlib.com/theme/blogger/img/t3.jpg" alt="" />
          </div>
         <div className={style.intro}>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <span>inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</span>
         </div>
        </div>
          <div className={style.cart}>
          <div className={style.image}>
          <img src="https://preview.colorlib.com/theme/blogger/img/t4.jpg" alt="" />
          </div>
         <div className={style.intro}>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <span>inappropriate behavior Lorem ipsum dolor sit amet, consectetur.</span>
         </div>
        </div>
      </div>
      <div className={style.batn}>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default Hot;
