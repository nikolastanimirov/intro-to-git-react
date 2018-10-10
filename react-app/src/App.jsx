import React, { Component } from "react";
import "./App.css";
import logo from "../src/resources/kibik_logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul class="header_contents">
          <li>
            <img src={logo} class="logo" alt="logo" />
          </li>
          <li>
            {" "}
            <p class="name-tag">KIBIC Club</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
