import React, { Component } from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';

const mayStyles = {
    width: "100%",
    height: "100%"
}

export class MapContainer extends Component {
   
    render() { 
        return (
            <Map google={this.props.google} 
            zoom={14}
            style={mayStyles}
            initialCenter={{
                lat: -1.2884,
                lng: 36.8233
            }} />

          );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o'
})(MapContainer);

