import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo"></div>
        <div className="index"></div>
        <div className="about"></div>
        <div className="login"></div>
        <div className="explore"></div>
        <div className="add"></div>
      </div>
    )
  }
}

export default Nav
