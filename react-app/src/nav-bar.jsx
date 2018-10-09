import React, { Component } from "react";
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <div id="navigation">
        <p class="name-tag">KIBIC Club</p>
        <ul>
          <button type="submit">Search</button>
          <input type="text" name="What to look for?" />
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">HOME</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
