import React, { Component } from 'react';

const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");

const MapWithADrawingManager = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={new google.maps.LatLng(-34.397, 150.644)}
  >
    
  </GoogleMap>
);

<MapWithADrawingManager />






// import {Map, GoogleApiWrapper, InfoWindow, Marker, Polygon } from 'google-maps-react';

// const mayStyles = {
//     width: "50%",
//     height: "100%",

// }

// const triangleCoords = [
//     {lat: -41.267622, lng: 174.745222}, 
//     {lat: -41.261520, lng: 174.753413},
//     {lat: -41.267003, lng: 174.761482},
//     {lat: -41.270654, lng: 174.749472},
//   ];


// export class MapContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             showingIndoWindow: false,
//             activeMarker: {},
//             selectedPlace: {},
//             zoom: 6
//          }
//     }
   
//     onMarkerClick = (props, marker, e) => {
//         this.setState(
//             {
//                 selectedPlace: props,
//                 activeMarker: marker,
//                 showingIndoWindow: true,
//                 zoom: 14
//             }
//         )
//     };

//     onClose = props => {
//         if (this.state.showingIndoWindow) {
//             this.setState({
//                 showingIndoWindow: false,
//                 activeMarker: null
//             })
//         }
//     };


//     render() { 
//         return (
//             <Map google={this.props.google} 
//             zoom={this.state.zoom}
//             style={mayStyles}
//             initialCenter={{lat: -41.267622, lng: 174.745222}} >



//                 <Polygon
//                 paths={triangleCoords}
//                 strokeColor="#B53737"
//                 strokeOpacity={0.8}
//                 strokeWeight={2}
//                 fillColor="#B53737"
//                 fillOpacity={0.5} 
//                 onClick={this.onMarkerClick}
//                 name={'Hello there'}
//                     />

//                 <Marker 
//                 onClick={this.onMarkerClick}
//                 name={'Hi Team Rahui'}/>

//                 <InfoWindow 
//                 marker={this.state.activeMarker}
//                 visible={this.state.showingIndoWindow}
//                 onClose={this.onClose}>
//                     <div><h4>{this.state.selectedPlace.name}</h4></div>

//                 </InfoWindow>

//             </Map>



//           );
//     }
// }
 
// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o',
//     libraries: ['drawing']
// })(MapContainer)