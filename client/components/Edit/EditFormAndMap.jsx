import React from "react";
import SplitterLayout from 'react-splitter-layout';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import ReactMap from "../ReactMap";
import EditRahuiFormEng from "./EditRahuiFormEng";
import EditRahuiFormReo from "./EditRahuiFormReo";
import { isAuthenticated } from "../../utils/auth"


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   

    render() { 
        return isAuthenticated() ? (  
            <div >

                <SplitterLayout >
                <div >
                 <ReactMap/>
                </div> 
                
                <div className="detailwrapper">
                {this.props.lang == "eng" ? <EditRahuiFormEng rahuiId={this.props.match.params.id}/>  : <EditRahuiFormReo rahuiId={this.props.match.params.id}/>}
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
        coordinates: state.coords,
        lang: state.toggle
    }
}

 
export default connect(mapStateToProps)(Edit);
