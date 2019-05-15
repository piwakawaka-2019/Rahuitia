import React, { Component } from "react";
import ProjEng from './ProjEng'
import ProjReo from './ProjReo'
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux'

class Project extends Component {
  render() {
    return (
    <div>
      {this.props.lang == "eng" ? <ProjEng/> : <ProjReo/>}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect (mapStateToProps)(Project);


