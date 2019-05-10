<<<<<<< HEAD
import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Map from "./Map";
import About from "./About";
import Landing from "./Landing"
=======
import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Map from './Map'
import Explore from './Explore'
import AddRahuiMap from './NewMap'
// import MapWithADrawingManager from './ReactMap'
import RahuiDetail from './RahuiDetail';
>>>>>>> dbc4b55ba6c15a108b25eac083f09d744c79a6ce

export function App({auth}) {
  return (
<<<<<<< HEAD
    <div>
      <Router>
        <div className="wrapper">Rāhui</div>
      </Router>
      {/* <Map/> */}
      {/* <About /> */}
      < Landing />
    </div>
  );
=======
    <div>  
    <Router>    
      <div className="wrapper">
      Rāhui 
      </div>
      <Route exact='true' path='/addrahui' component={AddRahuiMap}   />
      <Route exact='true' path='/' component={Explore} />
      <Route path='/rahui/:id' component={RahuiDetail} />
    </Router>
    {/* <Map/> */}
    {/* <MapWithADrawingManager/> */}
    <Explore/>
 
    </div>  
  )
>>>>>>> dbc4b55ba6c15a108b25eac083f09d744c79a6ce
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
