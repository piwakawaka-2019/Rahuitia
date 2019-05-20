import React, { Component } from "react";
import ProjEng from './ProjEng'
import ProjReo from './ProjReo'
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux'
import SplitterLayout from 'react-splitter-layout';


class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      aboutImage: 'Tahuaroa.png'
    }
  }
  render() {
    // return (
    // <div>
    //   {this.props.lang == "eng" ? <ProjEng/> : <ProjReo/>}
    // </div>
    // );

    return (
      <div>
        <SplitterLayout primaryIndex={0}>
          <div>
            {this.props.lang == "eng" ? <ProjEng /> : <ProjReo />}
          </div>

          <div className="about-image">
            <img src={this.state.aboutImage} alt="Tahuaroa" />
          </div>
        </SplitterLayout>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(Project);


