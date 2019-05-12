import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import About from "../components/about/About";

export class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/">Rāhui</Link>
        </div>
        <div className="about navButton">
          <Link to="/about/">ABOUT</Link>
        </div>

        <div className="login navButton">
          <Link to="/login/">LOGIN</Link>
        </div>
        <div className="explore navButton">
          <Link to="/explore/">EXPLORE</Link>
        </div>
        <div className="add navButton">
          <Link to="/AddRahuiForm/">ADD A RĀHUI</Link>
        </div>
      </div>
    );
  }
}

export default Nav;
