import React, { Component } from "react";
import "./App.css";
import section_image from "../src/resources/1.jpg";

class Description extends Component {
  render() {
    return (
      <div id="main-section">
        <div className="section">
          <img src={section_image} alt="sectionimage" />
          <span className="section-text">gdsgss</span>
        </div>
      </div>
    );
  }
}

export default Description;
