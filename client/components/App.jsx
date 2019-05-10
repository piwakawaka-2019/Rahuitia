import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Map from './Map'
import Explore from './Explore'
import AddRahuiMap from './AddRahuiMap'
<<<<<<< HEAD
import MapWithADrawingManager from './ReactMap'
=======
import RahuiDetail from './RahuiDetail';
>>>>>>> d6264c75b1f9f9d193433f04d47706ffefd0a3b5

export function App({auth}) {
  return (
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
    <MapWithADrawingManager/>
    <Explore/>
 
    </div>  
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
