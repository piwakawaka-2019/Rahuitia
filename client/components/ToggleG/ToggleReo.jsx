import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeUser, isAuthenticated } from '../../utils/auth'

class ToggleReo extends Component {
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
          <Link to="/explore/">Torohē</Link>
        </div>
        <div className="aboutNav">
          <Link to="/about/">Pēwhea</Link>
        </div>
        <div className="addNav">
          <Link to="/addrahui/">Tāpirihia he Rāhui</Link>
        </div>
        <div className="loginNav">
          {this.props.isAuthenticated ? <a href="#" onClick={this.handleSubmit}>Takiputa</a> : <Link to="/login/">Takiuru</Link>}
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


export default connect(mapStateToProps)(ToggleReo)