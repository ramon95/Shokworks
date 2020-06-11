import React from "react";
import "../assets/styles/components/Button.scss";

const Button = ({ message, active }) => {
  return <button className={active}>{message}</button>;
};

export default Button;
