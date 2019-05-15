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
   
    // const rahuiCoods = this.props.allrahui.length > 0 ? this.props.allrahui[9].geo_ref : []
    // let requiredMapBounds
    // let requiredCenter
    // if (rahuiCoods.length > 0) {
    //   requiredMapBounds = new window.google.maps.LatLngBounds();

    //   rahuiCoods.forEach(rahuiPoint => {
    //     requiredMapBounds.extend(new window.google.maps.LatLng(rahuiPoint.lat, rahuiPoint.lng))
    //   })

    //   requiredCenter = requiredMapBounds.getCenter()
    // }
    


  const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { this.props.coords }
       defaultZoom = {this.props.zoom}
        defaultOptions={{
        disableDefaultUI: true,
        mapTypeId: 'hybrid', //google.maps.MapTypeId.SATELLITE,
        streetViewControl: true,
        scaleControl: false,
        mapTypeControl: false,
        panControl: false,
        zoomControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}
      // ref={map => {
      // // console.log({bounds})
      // // if (map && bounds && bounds.length > 0) {
      // //   console.log(bounds[0].lat)
      // //   console.log(bounds[1].lat)
      // //   console.log(bounds[0].lng)
      // //   console.log(bounds[1].lng)
      // //   const sw = new window.google.maps.LatLng(bounds[0].lat, bounds[0].lng)
      // //   const ne = new window.google.maps.LatLng(bounds[1].lat, bounds[1].lng)
      // //   console.log('made sw ad ne')

      // //   const actualBounds = new window.google.maps.LatLngBounds(sw, ne);

      // //   console.log(actualBounds)
      // //   map.fitBounds(actualBounds)
      // // }

      // if (map && rahuiCoods && rahuiCoods.length > 0) {
      //   map.fitBounds(requiredMapBounds)
      // }
      // return map
      // }}
     >

      {this.props && this.props.allrahui && this.props.allrahui.map(rahuicoords => {
       return (<div> 
        <Marker key={rahuicoords.id + 100} position={rahuicoords.geo_ref[0]} onClick={() => {
         window.location = `#/rahui/${rahuicoords.id}`}}  />
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
         mapElement={ <div style={{ height: `100%`, width: `100%` }} /> }
         
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