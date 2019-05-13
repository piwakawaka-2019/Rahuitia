import React, { Component } from "react";
import Project from "./Project";


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      projectIsVisible: true
    };
  }

  handleTeamClick = () => {
    this.setState({
      projectIsVisible: false
    })
    window.location = `#/about/team`;
  }

  handleResourcesClick = () => {
    this.setState({
      projectIsVisible: false  
    })
    window.location = `#/about/resourses`;
  }

  handleProjectClick = () => {
    this.setState({
      projectIsVisible: true
    })
    window.location = `#/about`;
  }


  render() {
    return (
      <div>
        <h1>About</h1>
        <button onClick={this.handleTeamClick}>Team</button>
        <button  onClick={this.handleResourcesClick}>Resourses</button>
        <button onClick={this.handleProjectClick}>Project</button>
      
        

        {this.state.projectIsVisible ? <Project />:null }
        
       
      </div>
    );
  }
}

export default About;
