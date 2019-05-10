import React, { Component } from 'react';
import RahuiDetail from './RahuiDetail';



const RahuiListItem= props => {
 const rahui = props.rahui
 
 let handleclick=()=>{
    console.log("hello")
    }

    return ( 
        <div className="rahuilist" onClick={handleclick}>
            <b>IWI: {rahui.iwi_name}</b>
            <p> {rahui.description}</p>
            
            <hr></hr>
    </div>
    );
    
}
 
export default RahuiListItem;

