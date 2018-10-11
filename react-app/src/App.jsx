import React, { Component } from "react";
import "./App.css";
import logo from "../src/resources/kibik_logo.png";

class App extends Component {
  render() {
    return (
      <div className="header clearfix">
        <img src={logo} className="logo" alt="logo" />
        <p className="name-tag">KIBIC Club</p>
      </div>
    );
  }
}

export default App;
