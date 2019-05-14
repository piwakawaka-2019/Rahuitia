import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Landing from "./LandingG/Landing"
import Nav from "./NavG/Nav";
import Explore from "./ExploreG/Explore";

import AddRahuiMap from "./NewMap";
import MapWithADrawingManager from './ReactMap'
import AddRahuiForm from "./AddRahuiForm";


import RahuiDetail from "./RahuiDetail";
import About from "./AboutG/About";
import Team from "./TeamG/Team";
import Resourses from "./ResoursesG/Resourses";

// import ReactMap from "./ReactMap"

import Login from "../components/Login";
import ReactMap from "./ReactMap";
import FormAndMap from "./FormAndMap";
import Register from "./Register"
import Tautoko from "./Tautoko"

// import Register from "./Register"


export function App({ auth }) {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Landing} />
        
        
        <Route path="/about/" component={About} />
        <Route path="/about/team" component={Team} />
        <Route path="/about/resources" component={Resources} />
        <Route path="/register/" component={Register} />
        <Route path="/login/" component={Login} />
        <Route exact path="/AddRahui" component={FormAndMap} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/rahui/:id" component={RahuiDetail} />
        
      </Router>

      {/* <Register /> */}
        {/* <Tautoko /> */}
    </div>
  );
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
