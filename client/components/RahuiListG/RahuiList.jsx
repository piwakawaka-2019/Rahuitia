import React from "react";
import { toggleLang } from "../../actions/toggle";
import RahuiListEng from "./RahuiListEng"
import RahuiListReo from "./RahuiListReo"
import RahuiListItem from "./RahuiListItem"
import { connect } from "react-redux"

class RahuiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return (
            <div>
                 {this.props.lang == "eng" ? <RahuiListEng/> : <RahuiListReo/>}
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
 
export default connect (mapStateToProps)(RahuiList);