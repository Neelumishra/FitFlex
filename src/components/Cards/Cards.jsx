import React from "react";
import CardsCss from "./Cards.module.css";
function Cards({images,text}) {
  return (
    <div className={CardsCss.cards}>
      <img
        className={CardsCss.cardimage}
        src={images}
        width="300px"
        height="300px"
      />
      <br />
      <h3 className={CardsCss.card - text}>{text}</h3>
    </div>
  );

}
export default Cards;
