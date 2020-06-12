import React, { useState, useEffect } from "react";
import Fetch from "../Api/Fetch";
import NotFound from "./Error.jsx";
import Loading from "./pageLoding";
import Card from "../components/Card.jsx";
import "../assets/styles/pages/Home.scss";
import City from "../assets/images/city.png";
import Button from "../components/Button.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Carousel from "../components/Carousel.jsx";
import Carousel2 from "../components/Carousel2.jsx";
import Client1 from "../assets/images/client1.png";
import Client2 from "../assets/images/client2.png";
import Client3 from "../assets/images/client3.png";
import Client4 from "../assets/images/client4.png";
import Client5 from "../assets/images/client5.png";
import Client6 from "../assets/images/client6.png";
import Security from "../assets/images/secuirty.png";
import CellPhone from "../assets/images/cellPhone.png";

const Home = () => {
  let [state, setState] = useState({
    loading: true,
    error: null,
    items: [],
    clients: [],
    form: {
      FirstName: "",
      LastName: "",
      Email: "",
      Facing: "",
      message: "",
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // type, endpoint, body
    const [response, error] = await Fetch(
      "GET",
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-11&sortBy=publishedAt&apiKey=fdb647bffc1943cab06868ba0a927a40",
      null
    );

    const [response2, error2] = await Fetch(
      "GET",
      "https://jsonplaceholder.typicode.com/posts",
      null
    );
    if (!error) {
      setState({
        ...state,
        loading: false,
        items: response.articles,
        clients: response2,
      });
    } else {
      setState({
        ...state,
        loading: false,
        error: error,
      });
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, loading: true });
    var json = {
      title: `${state.form.FirstName} ${state.form.LastName}`,
      body: state.form.message,
    };
    // type, endpoint, body
    const [response3, error3] = await Fetch(
      "POST",
      "https://jsonplaceholder.typicode.com/posts",
      json
    );
    if (!error3) {
      const newClient = state.clients;
      newClient.unshift(response3);
      setState({
        ...state,
        loading: false,
        clients: newClient,
      });
    } else {
      setState({
        ...state,
        loading: false,
      });
    }
  };

  if (state.error) {
    return <NotFound title="500" error={state.error.message} />;
  }

  if (state.loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      {/* Componet header */}
      <Header />
      {/* componet cellphone*/}
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
      {/* component box_dobles */}
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
      {/* component box_dobles */}
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
      {/* component Speciality and carousel*/}
      <div className="speciality__title">
        <h1 className="Regular">What is the </h1>
        <h1 className="SemiBold">Speciality Of Us?</h1>
      </div>
      {state.items ? <Carousel items={state.items} active={0} /> : ""}
      {/* component clients */}
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
      {/* component client say */}
      <div className="clients_say__title">
        <h1>
          What Our <strong>Client Says?</strong>
        </h1>
      </div>
      {state.clients ? <Carousel2 items={state.clients} active={0} /> : ""}
      {/* component form */}
      <div className="form__container">
        <div className="title">
          <h1>Facing Problem?</h1>
          <h1>
            <strong>Lets Get In Touch Now</strong>
          </h1>
        </div>
        <div className="form">
          <form onSubmit={onSubmit}>
            <div className="input_double">
              <div className="group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Robert Lee"
                  onChange={handleChange}
                  name="FirstName"
                />
              </div>
              <div className="group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Anderson"
                  onChange={handleChange}
                  name="LastName"
                />
              </div>
            </div>
            <div className="group">
              <label>Your Email Adress</label>
              <input
                type="email"
                placeholder="kevin.jones@gmail.com"
                onChange={handleChange}
                name="Email"
              />
            </div>
            <div className="group">
              <label>Which Related Problem You Are Facing?</label>
              <select onChange={handleChange} name="Facing">
                <option>Select One</option>
                <option defaultValue="1">Option 1</option>
                <option defaultValue="2">Option 2</option>
                <option defaultValue="3">Option 3</option>
              </select>
            </div>
            <div className="group">
              <label>Type Your Message</label>
              <textarea
                rows="3"
                placeholder="Here goes your message"
                onChange={handleChange}
                name="message"
              ></textarea>
            </div>
            <div className="button">
              <Button message="Our Works" type="submit" />
            </div>
          </form>
        </div>
      </div>
      {/* component footer */}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
