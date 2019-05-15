import React, { Component } from "react";
import ResEng from './ResEng'
import ResReo from './ResReo'
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux'

class resourses extends Component {
  render() {
    return (
      <div>
      {this.props.lang == "eng" ? <ResEng/> : <ResReo/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}
export default connect (mapStateToProps)(resourses);
