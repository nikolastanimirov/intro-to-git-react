import React, { Component } from "react";
import "./App.css";
import image1 from "../src/resources/12.jpg";

class Slider extends Component {
  render() {
    return (
      <div id="slider">
        <ul>
          <li>
            <img src={image1} class="image1" alt="slider1" />
          </li>
        </ul>
      </div>
    );
  }
}
export default Slider;
