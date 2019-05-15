import React from "react";
import SplitterLayout from 'react-splitter-layout';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import ReactMap from "./ReactMap";
import EditRahuiForm from "./EditRahuiForm";
import { isAuthenticated } from "../utils/auth"


class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   

    render() { 
        console.log("edit props", this.props.match.params.id)
        return isAuthenticated() ? (  
            <div >

                <SplitterLayout >
                <div >
                 <ReactMap/>
                </div> 
                
                <div className="detailwrapper">
                <EditRahuiForm rahuiId={this.props.match.params.id}/> 
                </div>
               
                </SplitterLayout>
                
            </div>
        ) : <Redirect to='/register'/>
    }
}

const mapStateToProps = state => {
    return {
        allrahui: state.rahui,
        alliwi: state.iwi,
        area: state.area,
        coordinates: state.coords
    }
}

 
export default connect(mapStateToProps)(Explore);
