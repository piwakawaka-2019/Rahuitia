import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux';
import { removeUser, isAuthenticated } from '../../utils/auth'


class NavEng extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleSubmit(e) {
    console.log('cliock', this.props)
    removeUser()
    this.props.logout()
    window.location = `/#/`
  }

  render() {
    return (
      <div className="navbarContainer">
        <div className="logo">
          <Link to="/">Rāhui</Link>
        </div>
        <div className="navButton">
          <Link to="/about/">About</Link>
        </div>
        <div className="navButton">
          {this.props.isAuthenticated ? <a href="#" onClick={this.handleSubmit}>Logout</a> : <Link to="/login/">Login</Link>}
        </div>
        <div className="navButton">
          <Link to="/explore/">Explore</Link>
        </div>
        <div className="navButton">
          <Link to="/addrahui/">Add a Rāhui</Link>
        </div>
        <div>
          <button onClick={() => this.props.dispatch(toggleLang())}>{this.props.lang == "eng" ? 'Te Reo' : 'English'}</button>
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


export default connect(mapStateToProps)(NavEng); 
