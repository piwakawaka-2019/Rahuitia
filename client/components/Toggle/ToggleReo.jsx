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
      <header className="header">
        <Link className="logo" to="/">Rāhuitia</Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="nav-icon"></span></label>
        <ul className="menu">
          <li><Link to="/explore/">Torohē</Link></li>
          <li><Link to="/about/">Pēwhea</Link></li>
          <li><Link to="/addrahui/">Tāpirihia he Rāhui</Link></li>
          <li>{this.props.isAuthenticated ? <Link to="#" onClick={this.handleSubmit}>Takiputa</Link> : <Link to="/login/">Takiuru</Link> }</li>
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


export default connect(mapStateToProps)(ToggleReo)