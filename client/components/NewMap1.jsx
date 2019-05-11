import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import {  withScriptjs, withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps'

const coords = [
  {lat: -41.267622, lng: 174.745222}, 
  {lat: -41.261520, lng: 174.753413},
  {lat: -41.267003, lng: 174.761482},
  {lat: -41.270654, lng: 174.749472},
]; 




let handleclick=()=>{
  window.location = `#/rahui/82`; 
  }


const NewMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCDY6eWTVLvpOoTI2JrH8Q0ycDSV3F2J5o&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%`}} />,
    containerElement: <div style={{ height: window.innerHeight, width: window.innerWidth}} />,
    mapElement: <div style={{ height: `100%`, width: `49.75%`}} />,
  }),
  withScriptjs, 
  withGoogleMap)(props =>
  <GoogleMap
      defaultZoom={10}
      defaultCenter={new google.maps.LatLng({lat: -41.267622, lng: 174.745222})}>

      <Polygon
        path={coords}
        key={1}
        onClick={handleclick}
        options={{
            fillColor: "#2E86C1",
            fillOpacity: 0.7,
            strokeColor: "#2E86C1",
            strokeOpacity: 1,
            strokeWeight: 1
      }}/>

      <Marker position={(coords[0])} onClick={handleclick}/> 

     {/* {props.data.map(rahui => {
      console.log("The coordinates -", typeof rahui.geo_ref, rahui.geo_ref)
      let parsedArr = JSON.parse(rahui.geo_ref)
      console.log("parsed arr -", typeof parsedArr, parsedArr)


      return (<div>
        <Polygon
          path={parsedArr}
          key={rahui.id}
          onClick={handleclick}
          options={{
              fillColor: "#000",
              fillOpacity: 0.4,
              strokeColor: "#000",
              strokeOpacity: 1,
              strokeWeight: 1
        }}/> 
      <Marker position={(rahui.geo_ref[0])} onClick={handleclick}/> 
      </div>
      )
      })} */}
   

    

  </GoogleMap>
);

export default NewMap