import React, { Component } from 'react'
import { connect } from "react-redux";
import Project from "./Project/Project";
import Team from "./Team/Team";
import Resources from "./Resourses/Resourses"
import API from "./API/Api"
import { HashRouter as Router, Route, Link } from "react-router-dom";

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
      <div>
        <div className="overlayNew">
          {this.props.lang == "eng" ?
            <div className="aboutnav">
              {/* <button value="project" onClick={this.handleClick}>Project</button> */}
              
              <a className="project" onClick={this.handleClick}>Project</a>

              {/* <div className="logoNav">
                <Link to="/">Rāhuitia</Link>
              </div> */}


              
              <button value="team" onClick={this.handleClick}>Team</button>
              <button value="API" onClick={this.handleClick}>API</button>
              <button value="resources" onClick={this.handleClick}>Resources</button>
            </div>
            :
            <div className="aboutnav">
              <button value="project" onClick={this.handleClick}>Whakatakanga</button>
              <button value="team" onClick={this.handleClick}>Tima</button>
              <button value="API" onClick={this.handleClick}>API</button>
              <button value="resources" onClick={this.handleClick}>Rauemi Ipurangi</button>
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


        <div className="fullscreen-video-wrap">
          <img id="background-video" src="Tahuaroa.png" />
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
