import React, { Component } from 'react';

import SplitterLayout from 'react-splitter-layout';
import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";
import NewMap from "./NewMap"


class RahuiDetail extends Component {

    handleclick=()=>{
        window.location = `/#/explore`; 
        }
    
    render() { 
        let rahuiId = this.props.match.params.id;
        console.log(rahuiId, this.props)
    
        let {id, geo_ref, iwi_name, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, email} = this.props.allrahui.find( rahui => rahui.id == rahuiId)
        
        
        return ( 
        <div>
        <SplitterLayout >
            <div >
                <NewMap color={"#2E86C1"} zoom={15} coords={geo_ref[0]} />
            </div> 

            <div className="detailwrapper">
                <button onClick={this.handleclick.bind(this)}> Back to List </button>
                <br/><p>{iwi_name}</p> <br/>
                <h1> {description}</h1>
                <br/><b>Issued by:</b> <p> {first_name} {last_name} ({iwi_name} | {hapu_name})</p>
                <br/><b>Date placed:</b> <p> {date_placed}</p>
                <br/><b>Date Lifted:</b> <p> {date_lifted}</p>
                <br/><b>Korero:</b> <p> {korero}</p>
                <br/><b>Contact:</b> <p> {email}</p>
                <hr></hr>
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
 
export default connect(mapStateToProps)(RahuiDetail);

