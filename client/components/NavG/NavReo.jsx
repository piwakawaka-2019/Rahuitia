import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { toggleLang } from "../../actions/toggle";
import { connect } from 'react-redux';


class NavReo extends Component {
  render() {
    return (
<div className="navbar">
<div className="logo">
  <Link to="/">Rāhui</Link>
</div>
<div className="about navButton">
  <Link to="/about/">Pēwhea</Link>
</div>

<div className="login navButton">
  <Link to="/login/">Takiuru</Link>
</div>
<div className="explore navButton">
  <Link to="/explore/">Te Tūhara</Link>
</div>
<div className="add navButton">
  <Link to="/addrahui/">Tāpirihia he Rāhui</Link>
</div>

<div><button onClick={() => this.props.dispatch(toggleLang())}>{this.props.lang == "eng" ? 'Te Reo' : 'English'}</button></div>

</div>

    )}
  }
  function mapStateToProps(state) {
    return {
      lang: state.toggle
    }
  }

  export default connect (mapStateToProps)(NavReo); 