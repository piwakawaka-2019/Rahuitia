import React, { Component } from "react";

class AboutReo extends Component {
  render() {
    return (
<div>
        <h1>Pēwhea</h1>
        <button onClick={this.handleTeamClick}>Tima</button>
        <button  onClick={this.handleResourcesClick}>Rauemi Ipurangi</button>
        <button onClick={this.handleProjectClick}>Whakatakanga</button>
      
        

        
        
       
      </div>
    )
  }
}
export default AboutReo;