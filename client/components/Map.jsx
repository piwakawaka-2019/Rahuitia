import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker, Polygon } from 'google-maps-react';

import AllRahuiData from '../../data/rahui'

const myStyles = {
    width: "100%",
    height: "95%",

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

   


    render() { 
       
        return (
            //main map
            <Map google={this.props.google} 
            zoom={this.state.zoom}
            style={myStyles}
            initialCenter={{lat: -41.267622, lng: 174.745222}} >
                
            
                {AllRahuiData.rāhui.map(rahuipoint => {
                return <Marker 
                    onClick={this.onMarkerClick}
                    name={'nanz'}
                    position={rahuipoint.geo_ref}/>}
                )}


            </Map>



          );
    }
}
 
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o',
    libraries: ['drawing']
})(MapContainer);



