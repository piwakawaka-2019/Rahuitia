import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { removeUser, isAuthenticated } from '../../utils/auth'


class NavEng extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this)

}

handleSubmit(e) {
  e.preventDefault()

  removeUser()

  window.location = `/#/`
}

  render() {
    return (
<div className="navbar">
<div className="logo">
  <Link to="/">Rāhui</Link>
</div>
<div className="about navButton">
  <Link to="/about/">About</Link>
</div>

<div className="login navButton">
{isAuthenticated() ? <a href="#" onClick={this.handleSubmit}>Logout</a> : <Link to="/login/">Login</Link> }
</div>
<div className="explore navButton">
  <Link to="/explore/">Explore</Link>
</div>
<div className="add navButton">
  <Link to="/addrahui/">Add a Rāhui</Link>
</div>
</div>

    )}
  }

  export default NavEng