import React, { Component } from "react";

class AboutReo extends Component {
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
        <h1 className="aboutHeading">Pēwhea</h1>
        <button className="aboutNav" onClick={this.handleTeamClick}>Tima</button>
        <button className="aboutNav" onClick={this.handleResourcesClick}>Rauemi Ipurangi</button>
        <button className="aboutNav" onClick={this.handleProjectClick}>Whakatakanga</button>
        <button className="aboutNav" onClick={this.handleRahuiAPIClick}>API</button>
      </div>
    );
  }
}
export default AboutReo;
