import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Landing from "./LandingG/Landing";
import Toggle from "./ToggleG/Toggle";

import Explore from "./ExploreG/Explore";

import RahuiDetail from "./RahuiDetailG/RahuiDetail";
import About from "./About/About";

import Login from "../components/LoginG/Login";
import FormAndMap from "./FormAndMap";
import Register from "./Register";
import EditFromAndMap from "./EditFromAndMap";


export function App({ auth }) {
  return (
    <div>
      <Router>
        <Toggle />

        <Route exact path="/" component={Landing} />

        <Route path="/about" component={About} />
        {/* <Route exact path="/about" component={Project} />
        <Route path="/about/team" component={Team} />
        <Route path="/about/resourses" component={Resourses} /> */}
        {/* <Route path="/about/API" component={RahuiApi} /> */}

        <Route path="/login/" component={Login} />

        <Route exact path="/AddRahui" component={FormAndMap} />

        <Route exact path="/rahui/:id/edit" component={EditFromAndMap}/>
       

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
