import React from "react";
import SplitterLayout from 'react-splitter-layout';


import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";

import RahuiListItem from "./RahuiListItem"
import Map from './Map'
import NewMap from "./NewMap";


class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.dispatch(fetchAllRahui())
    }

    render() { 
        console.log( this.props)
        return (  
            <div >
                <SplitterLayout >
                <div >
                 <NewMap data={this.props.allrahui} zoom={7}/>
                </div> 
                
                <div className="detailwrapper">
                <h1>Select to learn more about a Rāhui </h1>
                 {this.props.allrahui.map(rahui => <RahuiListItem key={rahui.id} rahui={rahui} /> )}   
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