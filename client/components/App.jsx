import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing"
import Nav from "./Nav";
import Explore from "./Explore";

import AddRahuiMap from "./NewMap";
import MapWithADrawingManager from './ReactMap'
import AddRahuiForm from "./AddRahuiForm";


import RahuiDetail from "./RahuiDetail";
import About from "../components/about/About";
import Team from "../components/about/Team";
import Resourses from "../components/about/Resourses";

// import ReactMap from "./ReactMap"

import Login from "../components/Login";
import ReactMap from "./ReactMap";
import FormAndMap from "./FormAndMap";

export function App({ auth }) {
  return (
    <div>
      <Router>
        <Nav />
        <Route path="/rahui/:id" component={RahuiDetail} />

        <Route path="/about/" component={About} />
        <Route path="/about/team" component={Team} />
        <Route path="/about/resourses" component={Resourses} />
     
  
        <Route path="/Login/" component={Login} />
        <Route exact="true" path="/AddRahui" component={FormAndMap} />
        <Route exact="true" path="/explore" component={Explore} />
        <Route path="/rahui/:id" component={RahuiDetail} />
        <Route exact="true" path="/" component={Landing} />
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
