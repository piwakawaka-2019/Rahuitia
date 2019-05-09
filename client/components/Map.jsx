import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mayStyles = {
    width: "50%",
    height: "100%"
}

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showingIndoWindow: false,
            activeMarker: {},
            selectedPlace: {}
         }
    }
   
    onMarkerClick = (props, marker, e) => {
        this.setState(
            {
                selectedPlace: props,
                activeMarker: marker,
                showingIndoWindow: true
            }
        )
    };

    onClose = props => {
        if (this.state.showingIndoWindow) {
            this.setState({
                showingIndoWindow: false,
                activeMarker: null
            })
        }
    };


    render() { 
        return (
            <Map google={this.props.google} 
            zoom={14}
            style={mayStyles}
            initialCenter={{
                lat: -1.2884,
                lng: 36.8233
            }} >

            <Marker 
            onClick={this.onMarkerClick}
            name={'Kenyata'}/>

            <InfoWindow 
            marker={this.state.activeMarker}
            visible={this.state.showingIndoWindow}
            onClose={this.onClose}>
                 <div><h4>{this.state.selectedPlace.name}</h4></div>

            </InfoWindow>

            </Map>



          );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o'
})(MapContainer);



