import React, { Component } from "react";
import { connect } from 'react-redux'
import NewMap from '../NewMap'
import SplitterLayout from 'react-splitter-layout';
import Tautoko from "../Tautoko"



class DetailEng extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }

  handleclick=()=>{
    window.location = `/#/explore`; 
    }

   render() 
  { let {id, geo_ref, iwi_name, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu} = this.props
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
        <hr></hr> 
        
   </div> 

</SplitterLayout>
</div>
    )}
  }

function mapStateToProps(state) {
  return {
    lang: state.toggle,
  }
}

export default connect (mapStateToProps)(DetailEng);