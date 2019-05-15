import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeUser, isAuthenticated } from '../../utils/auth'

class ToggleReo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this)

}

  handleSubmit(e) {
    removeUser()
    this.props.logout()
    window.location = `/#/`
  }

  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <Link to="/">Rāhui</Link>
        </div>
        <div className="explore navButton">
          <Link to="/explore/">Torohē</Link>
        </div>
        <div className="about navButton">
          <Link to="/about/">Pēwhea</Link>
        </div>
        
        <div className="navbutton"></div>
        <div className="navbutton"></div>
        

        <div className="add navButton">
          <Link to="/addrahui/">Tāpirihia he Rāhui</Link>
        </div>
        <div className="login navButton">
        {this.props.isAuthenticated ? <a href="#" onClick={this.handleSubmit}>Takiputa</a> : <Link to="/login/">Takiuru</Link> }
        </div>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
    }
  }


export default connect(mapStateToProps)(ToggleReo)