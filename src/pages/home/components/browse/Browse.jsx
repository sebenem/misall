import React from "react";
import style from "./Browse.module.scss";
const Browse = () => {
  return (
    <div className={style.container}>
      <div className={style.con}>
        <div className={style.thump}>
          <img
            src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png"
            alt=""
          />
        </div>
        <div className={style.text}>
          <p>Shop is fun</p>
          <h2>Browse Our Premium Product</h2>
          <span>
            Us which over of signs divide dominion deep fill bring they're meat
            beho upon own earth without morning over third. Their male dry. They
            are great appear whose land fly grass.
          </span>
          <button>Browse Now</button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
