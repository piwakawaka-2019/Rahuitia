import React, { Component } from 'react';
// import RahuiDetail from '../RahuiDetail';



const RahuiListItem= props => {
 const rahui = props.rahui
 
 let handleclick=()=>{
    window.location = `#/rahui/${rahui.id}`; 
    }

    return ( 
        <div className="rahuilist" onClick={handleclick}>
            <h2>{rahui.description}</h2>
            <p>Issued by {rahui.iwi} on {rahui.date_placed}</p> 
            
            
            <hr></hr>
    </div>
    );
    
}
 
export default RahuiListItem;

