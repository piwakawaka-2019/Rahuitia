import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux';

import { removeUser } from '../../utils/auth'

class NavReo extends Component {
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
      <div className="navbarContainer">
        <div className="logo">
          <Link to="/">Rāhui</Link>
        </div>
        <div className="navButton">
          <Link to="/about/">Pēwhea</Link>
        </div>

        <div className="navButton">
          {isAuthenticated() ? <a href="#" onClick={this.handleSubmit}>takiputa</a> : <Link to="/login/">Takiuru</Link>}
        </div>
        <div className="navButton">
          <Link to="/explore/">Te Tūhara</Link>
        </div>
        <div className="navButton">
          <Link to="/addrahui/">Tāpirihia he Rāhui</Link>
        </div>

        <div><button onClick={() => this.props.dispatch(toggleLang())}>{this.props.lang == "eng" ? 'Te Reo' : 'English'}</button></div>

      </div>

    )
  }
}
function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(NavReo); 
