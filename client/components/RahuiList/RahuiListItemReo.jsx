import React, { Component } from 'react';




const RahuiListItemReo= props => {
 const rahui = props.rahui
 
 let handleclick=()=>{
    window.location = `#/rahui/${rahui.id}`; 
    }

    return ( 
        <div className="rahuilist" onClick={handleclick}>
            {/* ------<br/> */}
            {rahui.description}
            <p>I Whakaputaina e {rahui.iwi} i te {rahui.date_placed}</p>  
        </div>
    );
    
}
 
export default RahuiListItemReo;