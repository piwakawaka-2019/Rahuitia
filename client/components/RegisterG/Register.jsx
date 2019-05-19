import React from 'react'
import { connect } from "react-redux";
import { registerUserRequest } from '../../actions/register'
import { fetchAllIwi } from "../../actions/iwi";
import RegEng from "./RegEng"
import RegReo from "./RegReo"
import { loginError } from '../../actions/login';
import { toggleLang } from "../../actions/toggle";

class Register extends React.Component {
   

    render() {

        return (
          <div>
            {this.props.lang == "eng" ? <RegEng /> : <RegReo />}
          </div>
            
        )
        }}
    

const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
        lang: state.toggle,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Register);