import React, { Component } from 'react';
import { getUserTokenInfo } from '../utils/auth'
import { Link } from "react-router-dom";

import SplitterLayout from 'react-splitter-layout';

import { connect } from "react-redux";
import { fetchAllRahui} from "../actions/rahui";
import NewMap from "./NewMap"
import Tautoko from "./Tautoko"

class RahuiDetail extends Component {

    handleclick=()=>{
        window.location = `/#/explore`; 
        }
    
    render() { 
        let rahuiId = this.props.match.params.id;
        // console.log("props", this.props)
    
        let {id, user_id, geo_ref, iwi_name, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu} = this.props.allrahui.find( rahui => rahui.id == rahuiId)

        const userId = () => {
            return getUserTokenInfo().user_id != undefined ? getUserTokenInfo().user_id : 0
        } 

        console.log(userId(), user_id)

        return ( 
        <div>
        <SplitterLayout primaryIndex={0}>
            <div >
                <NewMap color={"#2E86C1"} rahuiBounds={geo_ref} />
            </div> 
    
            <div className="detailwrapper">
                <button onClick={this.handleclick.bind(this)}> Back to List </button><Tautoko />
                <br/><p>iwi: {iwi}   |   hapu: {hapu}   |   region: {region}</p> <br/>
                <h1> {description}</h1>
                <br/><b>Authorised by:</b> <p> {authoriser}</p>
                <br/><b>Submitted by:</b> <p> {first_name} {last_name} ({iwi_name} | {hapu_name})</p>
                <br/><b>Date placed:</b> <p> {date_placed}</p>
                <br/><b>Date Lifted:</b> <p> {date_lifted}</p>
                <br/><b>Korero:</b> <p> {korero}</p>
                <br/><b>Contact:</b> <p> {contact}</p>
                
                {userId() == user_id ? <Link to={`/rahui/${id}/edit`}>Edit</Link> : "" }   

             <div className="spaceme" />   
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

