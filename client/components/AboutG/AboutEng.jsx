import React, { Component } from "react";

class AboutEng extends Component {

  handleTeamClick = () => {
    this.setState({
      projectIsVisible: false
    });
    window.location = `#/about/team`;
  };

  handleResourcesClick = () => {
    this.setState({
      projectIsVisible: false
    });
    window.location = `#/about/resourses`;
  };

  handleProjectClick = () => {
    this.setState({
      projectIsVisible: true
    });
    window.location = `#/about`;
  };

  handleRahuiAPIClick = () => {
    this.setState({
      projectIsVisible: false
    });

    window.location = `#/about/api`;
  };

  render() {
    return (
      <div>
        <h1>About</h1>
        <button onClick={this.handleTeamClick}>Team</button>
        <button onClick={this.handleResourcesClick}>Resources</button>
        <button onClick={this.handleProjectClick}>Project</button>

        <button onClick={this.handleRahuiAPIClick}>API</button>

        {/* {this.state.projectIsVisible ? <Project />:null } */}
      </div>
    );
  }
}
export default AboutEng;
