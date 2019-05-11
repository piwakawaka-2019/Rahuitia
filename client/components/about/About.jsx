import React, { Component } from "react";
import Project from "./Project";
import Resourses from "./Resourses";
import Team from "./Team";

class about extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: "project"
    };
  }
  render() {
    return (
      <div>
        <Resourses />
        <Project />
        <Team />
      </div>
    );
  }
}

export default about;
