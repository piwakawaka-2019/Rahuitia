import React, { Component } from "react";
import { connect } from 'react-redux'
import SplitterLayout from 'react-splitter-layout';
import Tautoko from "../Tautoko"
import NewMap from '../NewMap'
import { getUserTokenInfo } from '../../utils/auth'


class DetailReo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  }
      this.userId = this.userId.bind(this)
  }



    userId = () => {
      console.log("user token:", getUserTokenInfo(), "this props:", this.props)
    return getUserTokenInfo().user_id != undefined ? getUserTokenInfo().user_id : 0 } 
  handleclick=()=>{
    window.location = `/#/explore`; 
    }

   render()
  { let {id, geo_ref, iwi_name, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu, user_id } = this.props
    return (

<div>
<SplitterLayout primaryIndex={0}>
    <div >
        <NewMap color={"#2E86C1"} rahuiBounds={geo_ref} />
    </div> 

    <div className="detailwrapper">
        <button style={{width:"15%" , marginBottom:"10px", padding:"0px"}} className="secondarybutton" onClick={this.handleclick.bind(this)}> Back to List </button>
        {/* <h1>{console.log("usertokeninfo:", getUserTokenInfo())}</h1> */}
        <h1> {description}</h1> 
        <Tautoko />
        <br/><b>Issued by </b><p> {hapu}   •  {iwi} •  {region}</p> 
        <br/><b>Authorised by</b> <p> {authoriser}</p>
        <br />
        <div className="twocol">
          <div ><b>Date placed</b> <p> {date_placed}</p></div>
          <div ><b>Date Lifted</b> <p> {date_lifted}</p> </div>
        </div>
        <br/><b>Korero</b> <p> {korero}</p>
        <br /><br></br>
        <div className="twocol">
          <div><b>Submitted by</b> <p> {first_name} {last_name}</p></div>
          <div><b>Contact</b> <p> {contact}</p></div>
        </div>
        <br></br>
        <hr></hr> 
        {this.userId() == user_id ? <Link to={`/rahui/${id}/edit`}>Edit</Link> : "" }
        <h1>{user_id}</h1>
        <div className="spaceme" />
        
   </div> 

</SplitterLayout>
</div>)}
}


function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect (mapStateToProps)(DetailReo);