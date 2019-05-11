import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Map from './Map'
import Explore from './Explore'
import AddRahuiMap from './AddRahuiMap'
import AddRahuiForm from './AddRahuiForm';
// import Register from './Register'
import AddRahuiMap from './NewMap'
// import MapWithADrawingManager from './ReactMap'
import RahuiDetail from './RahuiDetail';

export function App({ auth }) {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact='true' path='/addrahui' component={AddRahuiMap} />
        <Route exact='true' path='/' component={Explore} />
        <Route path='/rahui/:id' component={RahuiDetail} />
      </Router>
      {/* <Map/> */}
      {/* <MapWithADrawingManager/> */}
      <Explore />

    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
