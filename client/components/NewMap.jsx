import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import {  withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps'

const coords = [
    {lat: -41.267622, lng: 174.745222}, 
    {lat: -41.261520, lng: 174.753413},
    {lat: -41.267003, lng: 174.761482},
    {lat: -41.270654, lng: 174.749472},
  ]; 


const NewMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `400px` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={5}
      defaultCenter={new google.maps.LatLng(-41.267622, 174.745222)}
    >
     <Marker
    position={coords[0]}
  />
<Polygon
        path={coords}
        key={1}
        options={{
            fillColor: "#000",
            fillOpacity: 0.4,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 1
        }}/>
           
    </GoogleMap>
);

export default NewMap