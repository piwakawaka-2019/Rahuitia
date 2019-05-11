import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo"><a href="">Rāhui</a></div>
        <div className="index navButton"><a href="">INDEX</a></div>
        <div className="about navButton"><a href="">ABOUT</a></div>
        <div className="login navButton"><a href="">LOGIN</a></div>
        <div className="explore navButton"><a href="">EXPLORE</a></div>
        <div className="add navButton"><a href="">ADD A RĀHUI</a></div>
      </div>
    )
  }
}

export default Nav
