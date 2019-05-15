import React, { Component } from "react";
import Project from "../ProjectG/Project";
import AboutEng from "./AboutEng";
import AboutReo from "./AboutReo";
import { toggleLang } from "../../actions/toggle";
import { connect } from "react-redux";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      projectIsVisible: false
    };
  }

  render() {
    return (
      <div>
        {this.props.lang == "eng" ? <AboutEng /> : <AboutReo />}
        {this.state.projectIsVisible ? <Project /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  };
}

export default connect(mapStateToProps)(About);
