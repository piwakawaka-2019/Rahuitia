import React from 'react'
import AddRahEng from './AddRahEng'
import AddRahReo from './AddRahReo'
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux'


class AddRahuiForm extends React.Component{
    render() {
        return (
           <div>               
                {this.props.lang == "eng" ? <AddRahEng /> : <AddRahReo />}
           </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      lang: state.toggle
    }
  }

 export default connect(mapStateToProps)(AddRahuiForm);