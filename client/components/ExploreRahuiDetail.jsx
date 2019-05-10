import React, { Component } from 'react';

const ExploreRahuiDetail= props => {
 const rahui = props.rahui

    return ( 
        <div>
            <h1>{rahui.description}</h1>
            <b>{rahui.first_name}</b>
            <p>{rahui.iwi_name}</p>
            <hr></hr>
    </div>
    );
    
}
 
export default ExploreRahuiDetail;
