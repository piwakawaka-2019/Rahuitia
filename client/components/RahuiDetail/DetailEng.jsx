import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getUserTokenInfo } from '../../utils/auth'
import NewMap from '../NewMap'
import TautokoEng from "../Tautoko/TautokoEng"



class DetailEng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.userId = this.userId.bind(this)
  }

  handleclick = () => {
    window.location = `/#/explore`;
  }

  userId = () => {
    console.log("One:", getUserTokenInfo() !== null ? getUserTokenInfo().user_id : 0)
    return getUserTokenInfo() !== null ? getUserTokenInfo().user_id : 0
  }

  render() {
    let { id, user_id, geo_ref, iwi_name, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu } = this.props
    return (

      <React.Fragment>
        <div className="mapBackground">
          <NewMap color={"#2E86C1"} rahuiBounds={geo_ref} />
        </div>
        <div className="overlayNew">
          <div className="rahui-text">
            <button className="backToList" onClick={this.handleclick.bind(this)}> Back to List </button>
            <h1> {description}</h1>
            <TautokoEng />
            <br /><b>Issued by </b><p>iwi:{iwi} •  hapu:{hapu}</p>
            <br /><b>Authorised by</b> <p> {authoriser}</p>
            <br /><b>Date placed</b> <p> {date_placed}</p>
            <br /><b>Date Lifted</b> <p> {date_lifted}</p>
            <br /><b>Korero</b> <p> {korero}</p>
            <br /><b>Submitted by</b> <p> {first_name} {last_name}</p>
            <br /><b>Contact</b> <p> {contact}</p>
            <br></br>
            <h3>{this.userId() == user_id ? <Link to={`/rahui/${id}/edit`}>Edit</Link> : ""}</h3>
            <div className="spaceme" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle,
  }
}

export default connect(mapStateToProps)(DetailEng);