import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing/Landing";
import Toggle from "./Toggle/Toggle";

import Explore from "./Explore/Explore";

import RahuiDetail from "./RahuiDetail/RahuiDetail";
import About from "./About/About";

import Login from "./Login/Login";
import Add from "./Add/FormAndMap";
import Register from "./Register/Register";
import Edit from "./Edit/EditFormAndMap";


export function App({ auth }) {
  return (
    <div>
      <Router>
        <Toggle />
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/login/" component={Login} />
        <Route exact path="/AddRahui" component={Add} />
        <Route exact path="/rahui/:id/edit" component={Edit}/>       
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/rahui/:id" component={RahuiDetail} />
        <Route path="/register" component={Register} />

      </Router>
    </div>
  );
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
