import React, { Component } from "react";
import LandEng from './LandEng'
import LandReo from './LandReo'
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux'
import SplitterLayout from 'react-splitter-layout';


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: 'Farm aerials at sunrise_HD-web.mp4'
    }
  }

  render() {

    // return (
    //   <div>
    //     <SplitterLayout primaryIndex={0}>
    //       <div className="fullscreen-video-wrap">
    //         <video id="background-video" loop autoPlay muted>
    //           <source src={this.state.videoURL} type="video/mp4" />
    //           Your browser does not support the video tag.
    //         </video>
    //       </div>
    //       <div className="detailwrapper">
    //         {this.props.lang == "eng" ? <LandEng /> : <LandReo />}
    //       </div>
    //     </SplitterLayout>
    //   </div>
    // );


    return (
      // <div>
      //   <SplitterLayout primaryIndex={0} allowResize={false}>

      //     <div className="detailwrapper">
      //       {this.props.lang == "eng" ? <LandEng /> : <LandReo />}
      //     </div>

      //     <div className="fullscreen-video-wrap">
      //       <video id="background-video" loop autoPlay muted>
      //         <source src={this.state.videoURL} type="video/mp4" />
      //         Your browser does not support the video tag.
      //       </video>
      //     </div>

      //   </SplitterLayout>
      // </div>

      // <div>
      //   <SplitterLayout primaryIndex={0} allowResize={false}>

      //     <div className="detailwrapper">
      //       {this.props.lang == "eng" ? <LandEng /> : <LandReo />}
      //     </div>

      //     <div className="fullscreen-video-wrap">
      //       <video id="background-video" loop autoPlay muted>
      //         <source src={this.state.videoURL} type="video/mp4" />
      //         Your browser does not support the video tag.
      //       </video>
      //     </div>

      //   </SplitterLayout>
      // </div>



      <React.Fragment>
        <div className="fullscreen-video-wrap">
          <video id="background-video" loop autoPlay muted>
            <source src={this.state.videoURL} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>


        <div className="overlayNew">
          {/* <div className="overlayTextNew"> */}
            {this.props.lang == "eng" ? <LandEng /> : <LandReo />}
          {/* </div> */}
        </div>
      </React.Fragment>
    )









  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(Landing);



