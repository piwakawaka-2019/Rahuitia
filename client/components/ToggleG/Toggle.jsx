import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import About from "../components/about/About";
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux';
import ToggleEng from './ToggleEng'
import ToggleReo from './ToggleReo'

export class Toggle extends Component {
  render() {
    return (
      <div className="buttonRotate">

        <a className="languageToggle" onClick={() => this.props.dispatch(toggleLang())}>
          {this.props.lang == "eng" ? 'TeReo' : 'English'}
          {/* {this.props.lang == "eng" ? <ToggleEng /> : <ToggleReo />} */}
        </a>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}


export default connect(mapStateToProps)(Toggle);
