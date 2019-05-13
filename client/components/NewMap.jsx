import React, { Component } from 'react'

import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";
import {  withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps'


class NewMap extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
}


  render() {

  const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { this.props.coords }
       defaultZoom = {this.props.zoom}
       
     >

      {this.props && this.props.allrahui && this.props.allrahui.map(rahuicoords => {
       return (<div> 
        <Marker key={rahuicoords.id + 100} position={rahuicoords.geo_ref[0]} onClick={() => {
         window.location = `#/rahui/${rahuicoords.id}`}} />
        <Polygon
        path={rahuicoords.geo_ref}
        key={rahuicoords.id}
        onClick={() => { window.location = `#/rahui/${rahuicoords.id}`}} 
        options={{
            fillColor: "#2E86C1",
            fillOpacity: 0.7,
            strokeColor: "#2E86C1",
            strokeOpacity: 1,
            strokeWeight: 1
      }}/> 
      </div>)
     })}
         

     </GoogleMap>
  ));


  return(
     <div>
       <GoogleMapExample
         containerElement={ <div style={{ height: window.innerHeight, width: window.innerWidth}} /> }
         mapElement={ <div style={{ height: `100%`, width: `49%` }} /> }
         scrollwheel={false}
       />
     </div>
  );
  }
};

const mapStateToProps = state =>{
  return {
      allrahui: state.rahui
  }
}

export default connect(mapStateToProps)(NewMap);


