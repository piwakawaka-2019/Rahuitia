import React, { Component } from "react";
import ProjectEng from './ProjectEng'
import ProjectReo from './ProjectReo'
import { connect } from 'react-redux'

class Project extends Component {
  render() {
    return (
    <div>
      {this.props.lang == "eng" ? <ProjectEng/> : <ProjectReo/>}
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


