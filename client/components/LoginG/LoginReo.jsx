import React, { Component } from "react";
import { connect } from 'react-redux'

class LoginReo extends Component {
  render() {
    return (

    <div className="login-wrapper">
              <form
                  onSubmit={this.submit}
                  noValidate
                  className="login-wrapper" >
                     
                  <input name="email" type="text" placeholder="īmera" noValidate onChange={this.handleChange} />

                  <br></br>

                  <input name="password" type="password" placeholder="kupuhipa" noValidate onChange={this.handleChange} />
                  <br></br>
                  <button name="submit">Takiuru</button>
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


export default connect (mapStateToProps)(LoginReo) 