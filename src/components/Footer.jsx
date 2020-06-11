import React from "react";
import Logo from "../assets/images/logo.png";
import "../assets/styles/components/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Facebook from "../assets/images/facebook.png";
import Skype from "../assets/images/skype.png";
import LinkenIn from "../assets/images/linkelind.png";
import Instagram from "../assets/images/instagram.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="logo">
        <img src={Logo} alt="SHOKWORKS" />
      </div>
      <div className="container">
        <div className="info">
          <p>Contact Us</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
              +(1) 824-5428
            </li>
            <li>
              <FontAwesomeIcon icon={["fas", "mobile-alt"]} />
              Miami, United States
            </li>
            <li className="mail">
              <FontAwesomeIcon icon={["far", "envelope"]} />
              yfuentes@shokworks.io
            </li>
          </ul>
        </div>
        <div className="info">
          <p>Our Company</p>
          <ul>
            <li>About</li>
            <li>Product</li>
            <li>Portfolio</li>
            <li>Career</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="info">
          <p>Social Contacts</p>
          <ul>
            <li>Facebook</li>
            <li>Linked In</li>
            <li>Youtube</li>
            <li>Vimeo</li>
            <li>Skype</li>
          </ul>
        </div>
        <div className="double">
          <div className="info">
            <p>Address</p>
            <p className="text">
              Internet Systems Consortium, Inc. 950 Charter Street Redwood City,
              CA USA.
            </p>
          </div>
          <div className="info">
            <p>Follow Us</p>
            <div className="social">
              <img src={Facebook} alt="Facebook" />
              <img src={Skype} alt="Skype" />
              <img src={LinkenIn} alt="Linked In" />
              <img src={Instagram} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="fondo"></div>
    </React.Fragment>
  );
};

export default Footer;
