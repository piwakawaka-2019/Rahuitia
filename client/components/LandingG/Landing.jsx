import React, { Component } from "react";
import LandEng from './LandEng'
import LandReo from './LandReo'
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux'

class Landing extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videoURL: 'dronevideo.mp4'
    }
  }

  render() {
    return (
    <div> 
        <div className="fullscreen-video-wrap">

        <video id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                Your browser does not support the video tag.
        </video>

        </div>
    

      {this.props.lang == "eng" ? <LandEng/> : <LandReo/>}
      
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(Landing);



