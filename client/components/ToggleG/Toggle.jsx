import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import About from "../components/about/About";
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux';
import ToggleEng from './ToggleEng'
import ToggleReo from './ToggleReo'
import { receiveLogout } from "../../actions/login";

export class Toggle extends Component {
  


  render() {
    console.log(this.props)
    return (
      <div>

        <button className="languageToggleButton" onClick={() => this.props.toggleLang()}>

          {this.props.lang == "eng" ? 'Te Reo' : 'English'}

        </button>

        {this.props.lang == "eng" ? <ToggleEng isAuthenticated={this.props.isAuthenticated} logout={this.props.logout}/> : <ToggleReo isAuthenticated={this.props.isAuthenticated} logout={this.props.logout}/>}

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(receiveLogout()),
    toggleLang: () => dispatch(toggleLang())
  }
}


function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    lang: state.toggle
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
