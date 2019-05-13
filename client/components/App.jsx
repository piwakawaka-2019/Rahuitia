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
import VideoBackground from "./VideoBackground";
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
        <Route path="/video" component={VideoBackground} />
  
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
