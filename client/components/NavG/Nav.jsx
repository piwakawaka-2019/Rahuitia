import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import About from "../components/about/About";
import { toggleLang } from "../../actions/toggle";
import { receiveLogout } from "../../actions/login";
import { connect } from 'react-redux';
import NavEng from './NavEng'
import NavReo from './NavReo'

export class Nav extends Component {

  render() {
  return (
      <div>
    
        <button onClick={() => this.props.dispatch(toggleLang())}></button>

        {this.props.lang == "eng" ? 'TeReo' : 'English'}
        {this.props.lang == "eng" ? <NavEng isAuthenticated={this.props.isAuthenticated} logout={this.props.logout}/> : <NavReo isAuthenticated={this.props.isAuthenticated} logout={this.props.logout} />}
        </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(receiveLogout())
  }
}


function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    lang: state.toggle
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Nav);
