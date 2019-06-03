import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Project from "./Project/Project";
import Team from "./Team/Team";
import Resources from "./Resourses/Resourses"
import API from "./API/Api"

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: null
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      visibility: "project",
      videoURL: 'Farm aerials at sunrise_HD-web.mp4'
    });
  }

  handleClick(e) {
    e.preventDefault()
    const { value } = e.target
    this.setState({
      visibility: value
    });
  }

  render() {
    return (
      <div className="about-wrapper">
        <div className="overlayNewAbout">
          <div className="aboutContainer" >
          {this.props.lang == "eng" ?
            <div className="aboutnav">
              <button className="about-button" value="project" onClick={this.handleClick}>Project</button>
              <button className="about-button" value="team" onClick={this.handleClick}>Team</button>
              <button className="about-button" value="API" onClick={this.handleClick}>API</button>
              <button className="about-button" value="resources" onClick={this.handleClick}>Resources</button>
            </div>
            :
            <div className="aboutnav">
              <button className="about-button" value="project" onClick={this.handleClick}>Whakatakanga</button>
              <button className="about-button" value="team" onClick={this.handleClick}>Tima</button>
              <button className="about-button" value="API" onClick={this.handleClick}>API</button>
              <button className="about-button" value="resources" onClick={this.handleClick}>Rauemi Ipurangi</button>
            </div>
          }

          <div className="aboutbody">
            {this.state.visibility == "project" && <Project />
            }
            {this.state.visibility == "team" && <Team />
            }
            {this.state.visibility == "API" && <API />
            }
            {this.state.visibility == "resources" && <Resources />
            }
          </div>
        </div>
        </div>
        <div className="about-opacity-background">
        </div>
        <div className="about-background">
          <img src="contour.jpg" />
          <video id="background-video" loop autoPlay muted>
            <source src={this.state.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(About)
