import React from "react";
import Card from "../components/Card.jsx";
import "../assets/styles/pages/Home.scss";
import City from "../assets/images/city.png";
import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import Client1 from "../assets/images/client1.png";
import Client2 from "../assets/images/client2.png";
import Client3 from "../assets/images/client3.png";
import Client4 from "../assets/images/client4.png";
import Client5 from "../assets/images/client5.png";
import Client6 from "../assets/images/client6.png";
import Security from "../assets/images/secuirty.png";
import CellPhone from "../assets/images/cellPhone.png";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="cellphone">
        <img src={CellPhone} alt="Cell Phone" />
        <div className="title">
          <h1>A Brand New Way To See The World</h1>
        </div>
        <div className="buttons">
          <Button message="Our Works" active="active" />
          <Button message="Know More" />
        </div>
      </div>
      <div className="box_doble">
        <div className="info left">
          <div className="title">
            <h1>The Process About Our Work</h1>
          </div>
          <div className="text">
            <p>
              Alejandro Laplana leads and adaptable end-to-end development team
              consisting of a large portion of captable enterprise mixed reality
              solutions.
            </p>
          </div>
          <div className="button">
            <Button message="Know More" />
          </div>
        </div>
        <img src={City} alt="City" />
      </div>
      <div className="box_doble">
        <img src={Security} alt="Red security" />
        <div className="info right">
          <div className="title">
            <h1>
              We are here to <strong>always help</strong> you
            </h1>
          </div>
          <div className="text">
            <p>
              Shokworks team provide solutions and guidance to every project,
              taking the project vision to high level.
            </p>
          </div>
        </div>
      </div>
      <div className="clients">
        <h1>Our Partnes & Clients</h1>
        <div className="cards">
          <Card img={Client1} title="IMMERISTY" />
          <Card img={Client2} title="WIFIPASS" />
          <Card img={Client3} title="KINESIS" />
          <Card img={Client4} title="MEXPERIENCIA" />
          <Card img={Client5} title="MOBIEL" />
          <Card img={Client6} title="GOOD TIMES" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
