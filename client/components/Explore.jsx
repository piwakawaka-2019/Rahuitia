import React from "react";
import SplitterLayout from 'react-splitter-layout';

 

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
            <div >
                <SplitterLayout >
                <div customClassName="splitter-layout">
                 <Map />
                </div> 
                
                <div>
                 {this.props.allrahui.map(rahui => <RahuiDetail key={rahui.id} rahui={rahui} /> )}   
                </div>
                
                
                
               
                </SplitterLayout>
                
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