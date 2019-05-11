import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Map from './Map'
import Nav from './Nav'
import Explore from './Explore'
import AddRahuiMap from './NewMap'
import RahuiDetail from './RahuiDetail';

export function App({auth}) {
  return (
    <div>  
    <Router>    
      <Nav/>
      <Route exact='true' path='/addrahui' component={AddRahuiMap}   />
      <Route exact='true' path='/' component={Explore} />
      <Route path='/rahui/:id' component={RahuiDetail} />
    </Router>
]
 
    </div>  
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
