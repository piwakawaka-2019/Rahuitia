import React from "react";
import SplitterLayout from 'react-splitter-layout';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import ReactMap from "../ReactMap";
import AddRahuiForm from "./AddRahuiForm";

import { isAuthenticated } from "../../utils/auth"


class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        // return isAuthenticated() ? (  
        //     <div >
        //         <SplitterLayout >
        //             <div >
        //                 <ReactMap/>
        //             </div>               
        //             <div className="detailwrapper">
        //                 <AddRahuiForm/> 
        //             </div>              
        //         </SplitterLayout>                
        //     </div>
        // ) : <Redirect to='/register'/>

        return isAuthenticated() ? (
            <div className="mapBackground">
                <div >
                    <ReactMap />
                </div>
                <div className="overlayNew">
                    <AddRahuiForm />
                </div>
            </div>
        ) : <Redirect to='/register' />




    }
}

const mapStateToProps = state => {
    return {
        allrahui: state.rahui
    }
}

export default connect(mapStateToProps)(Add);
