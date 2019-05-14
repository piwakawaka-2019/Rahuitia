import React, { Component } from "react";
import RahuiApiEng from "./RahuiApiEng";
import RahuiApiReo from "./RahuiApiReo";
import { toggleLang } from "../../actions/toggle";
import { connect } from "react-redux";

class rahuiapi extends Component {
  render() {
    return (
      <div>{this.props.lang == "eng" ? <RahuiApiEng /> : <RahuiApiReo />}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  };
}

export default connect(mapStateToProps)(rahuiapi);
