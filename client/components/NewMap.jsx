import React, { Component } from 'react'

import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";
import {  withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps'
import { relative } from 'path';


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
        defaultOptions={{
        disableDefaultUI: true,
        mapTypeId: 'hybrid',//google.maps.MapTypeId.SATELLITE,
        streetViewControl: true,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
     >

      {this.props && this.props.allrahui && this.props.allrahui.map(rahuicoords => {
       return (<div> 
        <Marker key={rahuicoords.id + 100} position={rahuicoords.geo_ref[0]} onClick={() => {
         window.location = `#/rahui/${rahuicoords.id}`}} icon={{
          href: './images/face.png'
        }} />
        <Polygon
        path={rahuicoords.geo_ref}
        key={rahuicoords.id}
        onClick={() => { window.location = `#/rahui/${rahuicoords.id}`}} 
        options={{
            fillColor: "#DC5757",
            fillOpacity: 0.9,
            strokeColor: "#CE3838",
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
         containerElement={ <div style={{ height: window.innerHeight, width: `100%`, position: relative}} /> }
         mapElement={ <div style={{ height: `170%`, width: `100%` }} /> }
         
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


