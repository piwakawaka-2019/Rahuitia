import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import {  withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps'


class NewMap extends Component {


  handleclick = () => {
    window.location = `#/rahui/82`;  
    }

  render() {
    console.log('props of map', this.props)

    const coords = [
      {lat: -41.267622, lng: 174.745222}, 
      {lat: -41.261520, lng: 174.753413},
      {lat: -41.267003, lng: 174.761482},
      {lat: -41.270654, lng: 174.749472},
    ]; 
    
    
  const GoogleMapExample = withGoogleMap(props => (
     <GoogleMap
       defaultCenter = { { lat: -41.267622, lng: 174.745222} }
       defaultZoom = {this.props.zoom}
     >

      <Marker position={(coords[0])} onClick={this.handleclick}/> 

      <Polygon
        path={coords}
        key={1}
        onClick={this.handleclick}
        options={{
            fillColor: "#2E86C1",
            fillOpacity: 0.7,
            strokeColor: "#2E86C1",
            strokeOpacity: 1,
            strokeWeight: 1
      }}/>

     </GoogleMap>
  ));


  return(
     <div>
       <GoogleMapExample
         containerElement={ <div style={{ height: window.innerHeight, width: window.innerWidth}} /> }
         mapElement={ <div style={{ height: `100%`, width: `49%` }} /> }
       />
     </div>
  );
  }
};


export default NewMap;


