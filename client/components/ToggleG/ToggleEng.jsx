import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class ToggleEng extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/">Rāhui</Link>
        </div>
        <div className="explore navButton">
          <Link to="/explore/">Explore</Link>
        </div>
        <div className="about navButton">
          <Link to="/about/">About</Link>
        </div>

        <div className="navbutton"></div>
        <div className="navbutton"></div>

        <div className="add navButton">
          <Link to="/addrahui/">Add a Rāhui</Link>
        </div>
        <div className="login navButton">
          <Link to="/login/">Login</Link>
        </div>
      </div>

    )
  }
}

export default ToggleEng