import React from "react";
import img from "../assets/images/icon-1.png";

const CarouselItem = ({ level, item }) => {
  console.log(item);

  return (
    <div className={`item level${level}`}>
      <img src={item.urlToImage} alt="img" className="item__img" />
      <h2 className="item__title">{item.title}</h2>
      <p className="item__descripcion">{item.description}</p>
      <p className="more">mas...</p>
    </div>
  );
};
export default CarouselItem;
