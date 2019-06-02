import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import { getUserTokenInfo } from '../../utils/auth'
import NewMap from '../NewMap'
import TautokoReo from "../Tautoko/TautokoReo"
import { fetchAllRahui } from "../../actions/rahui";



class DetailReo extends Component {
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
    console.log("the one: ", theOne)
    let {id, geo_ref, iwi_name, user_id, description, last_name, first_name, hapu_name, date_placed, date_lifted, korero, region, authoriser, contact, iwi, hapu} = theOne

    return(
      <React.Fragment>
         <div className="mapBackground">
          <NewMap color={"#2E86C1"} rahuiBounds={geo_ref} />
         </div>
         <div className="overlayNew">
           <div className="rahui-text">
            <br></br>
            <button className="backToList" onClick={this.handleclick.bind(this)}> hoki ki te Rārangi </button>
             <h1> {description}</h1>
             <TautokoReo />
            <br /><b>I Whakaputaina e:</b><p>iwi:{iwi} •  hapu:{hapu}</p>
             <br /><b>Te Ingoa o nga Kaituhi</b> <p> {authoriser}</p>
            <br />
            <div className="twocol">
              <div ><b>Rā Kua Tuhia</b> <p> {date_placed}</p></div>
               <div ><b>Rā Kua Piki</b> <p> {date_lifted}</p> </div>
             </div>
            <br /><b>Korero</b> <p> {korero}</p>
            <br /><br></br>
            <div className="twocol detailbottom">
              <div><b>Tukuna e</b> <p> {first_name} {last_name}</p></div>
               <div><b>Whakapa Mai</b> <p> {contact}</p></div>
             </div>
            <br></br>
            <h3>{this.userId() == user_id ? <Link to={`/rahui/${id}/edit`}>whakatika</Link> : ""}</h3>
             <div className="spaceme" />
           </div>
        </div>
      </React.Fragment>
    )
  }

  renderError = () => {
    return <div className="error-message"><p>kāore he rāhui i te tīariari</p></div>
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

export default connect(mapStateToProps)(DetailReo);
