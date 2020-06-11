import React from "react";
import "../assets/styles/components/Button.scss";

const Button = ({ message, active }) => {
  return (
    <button className={active}>
      <span className="message">{message}</span>
    </button>
  );
};

export default Button;
