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
      <div>

        <button className="languageToggleButton" onClick={() => this.props.dispatch(toggleLang())}>

          {this.props.lang == "eng" ? 'Te Reo' : 'English'}

        </button>

        {this.props.lang == "eng" ? <ToggleEng /> : <ToggleReo />}

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
