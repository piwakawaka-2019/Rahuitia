import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Map from './Map'
import Explore from './Explore'
import AddRahuiMap from './AddRahuiMap'
import AddRahuiForm from './AddRahuiForm';
// import Register from './Register'

export function App({ auth }) {
  return (
    <div>
      {/* <Router>
        <div className="wrapper">
          Rāhui
      </div>
        <Route path='/addrahui' render={AddRahuiMap} />
      </Router>
      <Explore /> */}
      <AddRahuiForm />
      {/* <Register /> */}
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
