import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker, Polygon } from 'google-maps-react';

import AllRahuiData from '../../data/rahui'

const myStyles = {
    width: "50%",
    height: "100%",

}

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            zoom: 7
         }
    }
   
    onMarkerClick = (props, marker, e) => {
        this.setState(
            {
                selectedPlace: props,
                activeMarker: marker,
                showingInfoWindow: true,
                zoom: 14
            }
        )
    };

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingIndoWindow: false,
                activeMarker: null
            })
        }
    };


    render() { 
       
        return (
            //main map
            <Map google={this.props.google} 
            zoom={this.state.zoom}
            style={myStyles}
            initialCenter={{lat: -41.267622, lng: 174.745222}} >
                
            
                {AllRahuiData.rahui.map(rahuipoint => {
                return <Marker 
                    onClick={this.onMarkerClick}
                    name={'nanz'}
                    position={rahuipoint.geo_ref}/>}
                )}

                <InfoWindow 
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
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



