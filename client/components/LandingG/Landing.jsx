import React, { Component } from "react";
import English from './English'
import TeReo from './TeReo'

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
        {/* const eng = <button onClick={English}>English</button>;
        const te-reo = <button onClick={TeReo}>Te Reo</button> */}

        this.props.lang == "eng" ? language.english : language.te_reo)
      
      </div>
    );
  }
}


export default Landing;



