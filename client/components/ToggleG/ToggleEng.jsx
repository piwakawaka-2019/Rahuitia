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
      <div className="navbarContainer">
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
        {this.props.isAuthenticated ? <a href="#" onClick={this.handleSubmit}>Logout</a> : <Link to="/login/">Login</Link> }
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
    }
  }


export default connect(mapStateToProps)(ToggleEng)