import React, { Component } from "react";

class AboutEng extends Component {
  render() {
    return (
<div>
        <h1>About</h1>
        <button onClick={this.handleTeamClick}>Team</button>
        <button  onClick={this.handleResourcesClick}>Resourses</button>
        <button onClick={this.handleProjectClick}>Project</button>
      
        

        {/* {this.state.projectIsVisible ? <Project />:null } */}
        
       
      </div>
    )
  }
}
export default AboutEng;