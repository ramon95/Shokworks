import React from "react";
import "../assets/styles/pages/PageLoading.scss";

class PageLodingMin extends React.Component {
  render() {
    return (
      <div className="PageLoading">
        <div className="lds-grid">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default PageLodingMin;
