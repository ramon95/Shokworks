import React from "react";
import "../assets/styles/components/Button.scss";

const Button = ({ message, active, type }) => {
  return (
    <button className={active} type={type}>
      <span className="message">{message}</span>
    </button>
  );
};

export default Button;
