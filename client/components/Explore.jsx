import React from "react";
import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";

import RahuiDetail from "./ExploreRahuiDetail"
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
                <RahuiDetail key={rahui.id} rahui={rahui} />
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