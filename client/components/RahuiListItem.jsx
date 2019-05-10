import React, { Component } from 'react';
import RahuiDetail from './RahuiDetail';



const RahuiListItem= props => {
 const rahui = props.rahui
 
 let handleclick=()=>{
    window.location = `#/rahui/${rahui.id}`; 
    }

    return ( 
        <div className="rahuilist" onClick={handleclick}>
            <p>{rahui.description}</p>
            <b>{rahui.iwi_name}</b>
            
            
            <hr></hr>
    </div>
    );
    
}
 
export default RahuiListItem;

