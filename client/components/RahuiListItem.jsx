import React, { Component } from 'react';


class RahuiListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   

    render() { 
        return (
        <div>
            <b>IWI: {this.props.rahui.iwi_name}</b>
            <h2>{this.props.rahui.description}</h2>
            
            <hr></hr>
    </div>  
    );
    }
}
 
export default RahuiListItem;

// const RahuiListItem= props => {
//  const rahui = props.rahui

//     return ( 
//         <div>
//             <b>IWI: {rahui.iwi_name}</b>
//             <h2>{rahui.description}</h2>
            
//             <hr></hr>
//     </div>
//     );
    
// }
 
// export default RahuiListItem;
