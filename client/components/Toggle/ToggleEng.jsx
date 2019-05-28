import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeUser, isAuthenticated } from '../../utils/auth'

class ToggleEng extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this)

}

handleSubmit(e) {
  removeUser()
  this.props.logout()
  window.location = `/#/`
}

  render() {
    return (
    <header className="header">
      <Link className="logo" to="/">Rāhuitia</Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
      <ul className="menu">
      <li><Link to="/explore/">Explore</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/addrahui/">Add a Rāhui</Link></li>
      <li>{this.props.isAuthenticated ? <Link to="#" onClick={this.handleSubmit}>Logout</Link> : <Link to="/login/">Login</Link> }</li>
      </ul>
    </header>

    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
    }
  }


export default connect(mapStateToProps)(ToggleEng)


      {/* <div className="navbarContainer">
        <div className="logoNav">
          <Link to="/">Rāhuitia</Link>
        </div>
        <div className="exploreNav">
          <Link to="/explore/">Explore</Link>
        </div>
        <div className="aboutNav">
          <Link to="/about/">About</Link>
        </div>
        <div className="addNav">
          <Link to="/addrahui/">Add a Rāhui</Link>
        </div>
        <div className="loginNav">
        {this.props.isAuthenticated ? <Link to="#" onClick={this.handleSubmit}>Logout</Link> : <Link to="/login/">Login</Link> }
        </div>
      </div> */}





