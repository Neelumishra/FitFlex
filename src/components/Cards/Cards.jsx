import React from "react";
import "./Cards.css";
function Cards({images,text}) {
  return (
    <div className="container border cards">
      
      <img className="card-image" src={images} width="300px" height="300px" />
      <h3 className="card-text">{text}</h3>
    </div>
  );

}
export default Cards;
