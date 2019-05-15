import React, { Component } from "react";
import TeamEng from './TeamEng'
import TeamReo from './TeamReo'
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux'


class team extends Component {
  render() {
    return (
      <div>
      {this.props.lang == "eng" ? <TeamEng/> : <TeamReo/>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(team);