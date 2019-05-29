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
      visibility: "project"
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
              {/* <Link value="project" className="project" onClick={this.handleClick}>Project</Link>
              <Link value="team" className="project" onClick={this.handleClick}>Team</Link>
              <Link value="API" className="project" onClick={this.handleClick}>API</Link>
              <Link value="resources" className="project" onClick={this.handleClick}>Resources</Link> */}
              <button className="about-button" value="project" onClick={this.handleClick}>Project</button>
              <button className="about-button" value="team" onClick={this.handleClick}>Team</button>
              <button className="about-button" value="API" onClick={this.handleClick}>API</button>
              <button className="about-button" value="resources" onClick={this.handleClick}>Resources</button>
            </div>
            :
            <div className="aboutnav">
              {/* <Link value="project" className="project" onClick={this.handleClick}>Whakatakanga</Link>
              <Link value="team" className="project" onClick={this.handleClick}>Tima</Link>
              <Link value="API" className="project" onClick={this.handleClick}>API</Link>
              <Link value="resources" className="project" onClick={this.handleClick}>Rauemi Ipurangi</Link> */}
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


        <div className="aboutImage">
          {/* <img id="background-image" src="Tahuaroa.png" /> */}
          <img src="Tahuaroa.png" />

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
