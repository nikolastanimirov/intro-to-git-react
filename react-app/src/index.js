import React from "react";
import ReactDOM from "react-dom";
import Header from "./header.jsx";
import Slider from "./slider";
import Navbar from "./nav-bar";
import Description from "./description";
import Footer from "./footer";

import "./index.css";
//import "./script";

ReactDOM.render(
  <div>
    <Header />
    <Navbar />
    <Slider />
    <Description />
    <Description />
    <Description />
    <Footer />
  </div>,
  document.getElementById("root")
);
