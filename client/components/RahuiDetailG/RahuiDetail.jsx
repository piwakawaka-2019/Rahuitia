import React, { Component } from 'react';

import SplitterLayout from 'react-splitter-layout';

import { connect } from "react-redux";
import { fetchAllRahui} from "../../actions/rahui";
import NewMap from "../NewMap"
import Tautoko from "../Tautoko"
import DetailEng from "./DetailEng"
import DetailReo from "./DetailReo"

class RahuiDetail extends Component {

    handleclick=()=>{
        window.location = `/#/explore`; 
        }
    
    render() { 
        let rahuiId = this.props.match.params.id;
        console.log(rahuiId, this.props)
    
        let {id, geo_ref, iwi_name, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu} = this.props.allrahui.find( rahui => rahui.id == rahuiId)
        
        
        return ( 
            <div>
            {this.props.lang== "eng" ? <DetailEng {...this.props}/> : <DetailReo {...this.props}/>}
            </div>
         );
    }
}
 

const mapStateToProps = state =>{
    return {
        allrahui: state.rahui,
        lang: state.toggle
    }
}
 
export default connect(mapStateToProps)(RahuiDetail);

