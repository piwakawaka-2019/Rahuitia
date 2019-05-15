import React, { Component } from "react";
import { connect } from 'react-redux'

class LoginEng extends Component {
  render() {
    return (

      <div className="login-wrapper">

        <form
          onSubmit={this.submit}
          noValidate
          className="login-wrapper" >
          <h2 className="loginHeader" >Log in</h2>

          <input className="loginInput" name="email" type="text" placeholder="email" noValidate onChange={this.handleChange} />

          <br></br>

          <input className="loginInput" name="password" type="password" placeholder="password" noValidate onChange={this.handleChange} />
          <br></br>
          <button className="loginButton" name="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}


export default connect(mapStateToProps)(LoginEng) 