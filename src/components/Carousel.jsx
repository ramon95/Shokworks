import React, { useState } from "react";
import CarouselItem from "./CarouselItem.jsx";
import "../assets/styles/components/Carousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Carousel = ({ items, active }) => {
  const [state, setState] = useState({
    items: items,
    active: active,
    direction: "",
  });

  const handleGenerateItems = () => {
    var items = [];
    var level;
    for (let i = state.active - 2; i < state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = state.items.length + i;
      } else if (i >= state.items.length) {
        index = i % state.items.length;
      }
      level = state.active - i;
      items.push(
        <CarouselItem key={index} item={state.items[index]} level={level} />
      );
    }
    return items;
  };

  const handleMoveLeft = () => {
    var newActive = state.active;
    newActive--;
    setState({
      ...state,
      active: newActive < 0 ? state.items.length - 1 : newActive,
      direction: "left",
    });
  };

  const handleMoveRight = () => {
    var newActive = state.active;
    setState({
      ...state,
      active: (newActive + 1) % state.items.length,
      direction: "right",
    });
  };
  return (
    <div className="carousel__container">
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={handleMoveLeft}>
          <FontAwesomeIcon icon={["fas", "arrow-left"]} />
        </div>
        <ReactCSSTransitionGroup transitionName={state.direction}>
          {handleGenerateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={handleMoveRight}>
          <FontAwesomeIcon icon={["fas", "arrow-right"]} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
