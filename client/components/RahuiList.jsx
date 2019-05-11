import React from "react";

import RahuiListItem from "./RahuiListItem"

class RahuiList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <h1>Select to learn more about a Rāhui </h1>
                 {this.props.allrahui.map(rahui => <RahuiListItem key={rahui.id} rahui={rahui} /> )}   
            </div>
           );
    }
}
 
export default RahuiList;