import React from "react";
import Button from "./Button.jsx";
import "../assets/styles/components/Header.scss";
import Logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="SHOKWORKS" />
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Product</li>
            <li>Career</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
      <div className="serach__box">
        <div className="seach__box__container">
          <span className="serach__box__icon">
            <FontAwesomeIcon icon={["fas", "search"]} />
          </span>
          <input type="search" placeholder="Search Here" id="search" />
        </div>
      </div>
      <div className="button">
        <Button message="Constas Us" active="active" />
      </div>
    </header>
  );
};

export default Header;
