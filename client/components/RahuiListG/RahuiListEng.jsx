import React, { Component } from "react";
import RahuiList from "./RahuiList"
import RahuiListItem from "./RahuiListItem"
import { connect } from 'react-redux'

class RahuiListEng extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }
  
  render() { 

      console.log(this.props.allrahui)
      return (
            <div>
              <br></br>
                <h1>Select to learn more about a Rāhui </h1>
                 {this.props.allrahui.map(rahui => <RahuiListItem key={rahui.id} rahui={rahui} /> )}   
            </div>
           );
    }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect (mapStateToProps)(RahuiListEng);