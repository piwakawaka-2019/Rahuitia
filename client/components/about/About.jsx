import React, { Component } from "react";
import Project from "./Project";
import Resourses from "./Resourses";
import Team from "./Team";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: "project"
    };
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <button>Team</button>
        <button>Resourses</button>
        <button>Project</button>
        <Project />
       
      </div>
    );
  }
}

export default About;
