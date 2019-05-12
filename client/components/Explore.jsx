import React from "react";
import SplitterLayout from 'react-splitter-layout';
import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";
import NewMap from "./NewMap";
import RahuiList from "./RahuiList";


class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.dispatch(fetchAllRahui())
    }

    render() { 
        console.log( "explore", this.props)
        return (  
            <div >

                <h1>hi ya!!!</h1>


                <SplitterLayout >
                <div >
                 <NewMap color={"#FF4C4C"} zoom={6} coords={{lat: -41.267622, lng: 174.745222}}/>
                </div> 
                
                <div className="detailwrapper">
                <RahuiList allrahui={this.props.allrahui} /> 
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
