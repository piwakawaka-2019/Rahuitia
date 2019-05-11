import React, { Component } from 'react'

import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";
import {  withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps'


class NewMap extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
}


  handleclick = () => {
    window.location = `#/rahui/82`;  
    }

  render() {

    let firstobj = this.props.allrahui[0]
    console.log('props of map', typeof firstobj, firstobj && firstobj.id)
    
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

      {this.props && this.props.allrahui && this.props.allrahui.map(rahuicoords => {
       return <Marker position={rahuicoords.geo_ref[0]} onClick={this.handleclick}/> 
     })}

      {/* <Marker position={this.props.coords} onClick={this.handleclick}/> 

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
      }}/> */}

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

const mapStateToProps = state =>{
  return {
      allrahui: state.rahui
  }
}

export default connect(mapStateToProps)(NewMap);


