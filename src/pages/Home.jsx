import React from "react";
import "../assets/styles/pages/Home.scss";
import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import CellPhone from "../assets/images/cellPhone.png";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="fondo__cuadros">
        <div className="cellphone">
          <img src={CellPhone} alt="Cell Phone" />
          <div className="title">
            <h1>A Brand New Way</h1>
            <h1>To See The World</h1>
          </div>
          <div className="buttons">
            <Button message="Our Works" active="active" />
            <Button message="Know More" />
          </div>
        </div>
        <div className="city">.</div>
      </div>
    </React.Fragment>
  );
};

export default Home;
