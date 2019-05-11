import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import {  withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager"

// const { compose, withProps } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
// } = require("react-google-maps");
// const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");


// const coords = [
//     {lat: -41.267622, lng: 174.745222}, 
//     {lat: -41.261520, lng: 174.753413},
//     {lat: -41.267003, lng: 174.761482},
//     {lat: -41.270654, lng: 174.749472},
//   ]; 


const MapWithADrawingManager = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%`, width: `50%` }} />,
  }),
  withScriptjs,
  withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={5}
      defaultCenter={new google.maps.LatLng(-41.267622, 174.745222)}
    >

    <DrawingManager
        defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              // google.maps.drawing.OverlayType.CIRCLE,
              google.maps.drawing.OverlayType.POLYGON,
              // google.maps.drawing.OverlayType.POLYLINE,
              // google.maps.drawing.OverlayType.RECTANGLE,
            ],
          },
          // circleOptions: {
          //   fillColor: `#ffff00`,
          //   fillOpacity: 1,
          //   strokeWeight: 5,
          //   clickable: false,
          //   editable: true,
          //   zIndex: 1,
          // },
          
        }}
        onPolygonComplete={(polygon) => {
          console.log(polygon)
          console.log(polygon.getPath().getArray().toString())
          console.log(polygon.getPath().getLength())
        }}
      />

{/* <Polygon
        path={coords}
        key={1}
        options={{
            fillColor: "#000",
            fillOpacity: 0.4,
            strokeColor: "#000",
            strokeOpacity: 1,
            strokeWeight: 1
        }}/> */}
        
     
      

      
    </GoogleMap>
);

export default MapWithADrawingManager