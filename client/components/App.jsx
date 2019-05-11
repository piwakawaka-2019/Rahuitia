import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Nav from "./Nav";
import Explore from "./Explore";
import AddRahuiMap from "./NewMap";

import RahuiDetail from "./RahuiDetail";

import About from "../components/about/About";
import Team from "../components/about/Team";
import Resourses from "../components/about/Resourses";

export function App({ auth }) {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact="true" path="/addrahui" component={AddRahuiMap} />
        <Route exact="true" path="/" component={Explore} />
        <Route path="/rahui/:id" component={RahuiDetail} />

        <Route path="/about/" component={About} />
        <Route path="/about/team" component={Team} />
        <Route path="/about/resourses" component={Resourses} />
      </Router>
      {/* <Map/> */}
      {/* <MapWithADrawingManager/> */}
      {/* <Explore/> */}

      {/* <About /> */}
    </div>
  );
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
