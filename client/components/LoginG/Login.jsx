import React, { Component } from 'react'
import { connect } from "react-redux";
import {loginUser, loginError} from '../../actions/login'
import { toggleLang } from "../../actions/toggle";
// table.integer('password_hash')
// table.integer('email')
import LoginEng from './LoginEng'
import LoginReo from './LoginReo'

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
    let {email, password} = this.state
    this.props.dispatch(loginUser({email, password}))
  }

  render() {
    const {auth} = this.props
      return (
     <div>   {console.log(this.props, this.state)}
      {this.props.lang == "eng" ? <LoginEng {...this.props} /> : <LoginReo {...this.props} />}
     </div>
      )
  }
}

const mapStateToProps = ({auth}, state) => {
  return {
    auth,
    lang: state.toggle
  }
}

export default connect(mapStateToProps)(Login)