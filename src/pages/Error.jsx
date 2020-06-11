import React from "react";
import "../assets/styles/pages/Error.scss";

class Error extends React.Component {
  componentDidMount() {
    document.body.classList.add("background-error");
    var container = document.getElementById("container");
    window.onmousemove = (e) => {
      var x = -e.clientX / 5,
        y = -e.clientY / 5;
      container.style.backgroundPositionX = `${x}px`;
      container.style.backgroundPositionY = `${y}px`;
    };
  }

  componentWillUnmount() {
    document.body.classList.remove("background-error");
  }

  render() {
    const message = "Página no encontrada";
    if (!this.props.error) {
      this.content = `La página que estas buscnado no existe. Es posible que haya escrito
      mal la dirección o que la pagina se haya movido.`;
    } else {
      this.content = `Estamons prenstando un problema con el servidor por favor intente
      ingresar nuevamente mas tarde.`;
    }
    return (
      <div className="container-error" id="container">
        <div className="content">
          <h2>{this.props.title || 404}</h2>
          <h4>{this.props.error || message}</h4>
          <p>{this.content}</p>
        </div>
      </div>
    );
  }
}

export default Error;
