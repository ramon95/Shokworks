import React from "react";
import "../assets/styles/components/Card.scss";

const Card = ({ img, title }) => (
  <div className="card">
    <img src={img} alt={title} />
    <a href="/">Learn More</a>
  </div>
);

export default Card;
