import React, { Component } from 'react'
import { connect } from "react-redux";
import { loginUser, loginError } from '../actions/login'
// table.integer('password_hash')
// table.integer('email')

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this)
  }

  handleChange(e) {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  submit(e) {
    e.preventDefault()
    let { email, password } = this.state
    this.props.dispatch(loginUser({ email, password }))
    window.location = `/#/explore`

  }

  render() {
    const { auth } = this.props
    return (
      <div className="login-wrapper">
        <form
          onSubmit={this.submit}
          noValidate
          className="login-wrapper"
        >
          <input name="email" type="text" placeholder="email" noValidate onChange={this.handleChange} />

          <br></br>

          <input name="password" type="password" placeholder="password" noValidate onChange={this.handleChange} />
          <br></br>
          <button name="submit">Sign in</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)