import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker, Polygon } from 'google-maps-react';


const mayStyles = {
    width: "50%",
    height: "100%",
}


class AddRahuiMap extends Component {

handleGoogleMapApi(google) {
    const map = google.map
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.RECTANGLE
        ]
      },
      markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
      circleOptions: {
        fillColor: '#ffff00',
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    });
    drawingManager.setMap(map);
  }


    render() { 
       
        return (  
            <Map google={this.props.google} 
            zoom={6}
            style={mayStyles}
            initialCenter={{lat: -41.267622, lng: 174.745222}}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={ this.handleGoogleMapApi.bind(this)} >
            </Map>
        );
    }
}
 
export default AddRahuiMap;