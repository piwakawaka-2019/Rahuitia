import React from "react";
import { toggleLang } from "../../actions/toggle";
import RahuiListEng from "./RahuiListEng"
import RahuiListReo from "./RahuiListReo"
import RahuiListItem from "./RahuiListItem"
import { connect } from "react-redux"

class RahuiList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log("this props:", this.props.allrahui.map(x => x.description))
    return (
      <div>
        {this.props.lang == "eng" ? <RahuiListEng {...this.props} /> : <RahuiListReo {...this.props} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle,
    rahui: state.rahui
  }
}

export default connect(mapStateToProps)(RahuiList);