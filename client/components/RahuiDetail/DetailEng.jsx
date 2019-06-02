import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getUserTokenInfo } from '../../utils/auth'
import NewMap from '../NewMap'
import TautokoEng from "../Tautoko/TautokoEng"
import { fetchAllRahui } from "../../actions/rahui";



class DetailEng extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.userId = this.userId.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchAllRahui())
    }

  handleclick = () => {
    window.location = `/#/explore`;
  }

  userId = () => {
    console.log("One:", getUserTokenInfo() !== null ? getUserTokenInfo().user_id : 0)
    return getUserTokenInfo() !== null ? getUserTokenInfo().user_id : 0
  }

  renderMap = (theOne) => {
    let {id, geo_ref, iwi_name, user_id, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu} = theOne

    return(
      <React.Fragment>
        <div className="mapBackground">
          <NewMap color={"#2E86C1"} rahuiBounds={geo_ref} />
        </div>
        <div className="overlayNew">
          <div className="rahui-text">
          <button style={{ width: "15%", marginBottom: "10px", padding: "0px" }} className="secondarybutton" onClick={this.handleclick.bind(this)}> Back to List </button>
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

  renderError = () => {
    return <div className="error-message"><p>this rāhui does not exist</p></div>
  }

  renderDetail = () => {
    let theOne = this.props.rahui.find( rahui => rahui.id == this.props.rahuiId)

    return theOne != undefined ? this.renderMap(theOne) : this.renderError()
  }

  render() {
    console.log(this.props)
    return this.props.rahui.length && this.renderDetail()

    // return this.props.rahui.length ? this.renderDetail() : this.renderLoading()

  }
}

function mapStateToProps(state) {
  return {
    lang: state.toggle,
    rahui: state.rahui
  }
}

export default connect(mapStateToProps)(DetailEng);

