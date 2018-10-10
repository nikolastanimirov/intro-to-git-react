import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Slider from "./slider";
import Navbar from "./nav-bar";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Navbar />, document.getElementById("nav"));
ReactDOM.render(<Slider />, document.getElementById("slider"));
