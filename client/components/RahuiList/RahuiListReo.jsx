import React, { Component } from "react";
import RahuiList from "./RahuiList"
import RahuiListItem from "./RahuiListItem"
import { connect } from 'react-redux'

class RahuiListReo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
              <br></br>
                <h1>Tīpakohia ki te ako atu e pā ana ki te Rāhui </h1>
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
  
 
export default connect (mapStateToProps)(RahuiListReo);