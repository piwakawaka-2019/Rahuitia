import React from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"

import Landing from "./LandingG/Landing";
import Nav from "./NavG/Nav";
import Explore from "./ExploreG/Explore";

import AddRahuiMap from "./NewMap";
import MapWithADrawingManager from "./ReactMap";
import AddRahuiForm from "./AddRahuiForm";
import EditRahuiForm from "./EditRahuiForm";

import RahuiDetail from "./RahuiDetail";
import About from "./AboutG/About";
import Team from "./TeamG/Team";
import Resourses from "./ResoursesG/Resourses";

//testing routes

// "../components/about/RahuiAPI";
import RahuiApi from "./RahuiAPIG/RahuiApi";



import Login from "../components/Login";
import ReactMap from "./ReactMap";
import FormAndMap from "./FormAndMap";
import Register from "./Register";
import Tautoko from "./Tautoko";
import Project from "./ProjectG/Project";

// import Register from "./Register"

export function App({ auth }) {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/" component={Landing} />

        <Route path="/about" component={About} />
        <Route exact path="/about" component={Project}/>
        <Route path="/about/team" component={Team} />
        <Route path="/about/resourses" component={Resourses} />

        <Route path="/about/API" component={RahuiApi} />

        <Route path="/Login/" component={Login} />
        
        <Route exact path="/AddRahui" component={FormAndMap} />

        <Route exact path="/rahui/:id/edit" component={EditRahuiForm}/>

        <Route exact path="/explore" component={Explore} />
        <Route exact path="/rahui/:id" component={RahuiDetail} />
        <Route path="/register" component={Register} />
        
      </Router> */}

 
    </div>
  );
}
const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(mapStateToProps)(App);
