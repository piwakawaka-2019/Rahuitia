import React from "react";
import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";

import Map from './Map'


class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.dispatch(fetchAllRahui())
    }

    render() { 
        return (  
            <div>
                {this.props.allrahui.map(rahui => 
                <div>
                  <h1>{rahui.description}</h1>
                  <b>{rahui.first_name}</b>
                 </div>
                )}
                
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        allrahui: state.rahui
    }
}
 
export default connect(mapStateToProps)(Explore);