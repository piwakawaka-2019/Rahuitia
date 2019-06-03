import React from "react";
import { connect } from "react-redux";
import { fetchAllRahui } from "../../actions/rahui";
import NewMap from "../NewMap";
import RahuiList from "../RahuiList/RahuiList";

// const front = {
// 	zIndex: '100',
// 	backgroundColor:'black',
// 	fontWeight:'bold'
// };

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: null,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchAllRahui())
        this.setState({
            visibility: "list"
        })
    }

    handleClick(e) {
        e.preventDefault()
        const { value } = e.target
        this.setState({
          visibility: value
        });
      }

    render() {
        
        return (
            <React.Fragment>

                    <div className="mapBackground" style={this.state.visibility == "map" ? {zIndex: 81} : {zIndex: 71}}>
                        <NewMap color={"#FF4C4C"} rahuiBounds={[{ lat: -33.543484, lng: 172.880926 }, { lat: -47.622458, lng: 170.036187 }]} />
                    </div>

                    <div className="overlayNew" style={this.state.visibility == "list" ? {zIndex: 81} : {zIndex: 71}}>
                        <RahuiList allrahui={this.props.allrahui.reverse()} />
                        <div className="spaceme" />
                    </div>

                    <div className="explore-buttons">
                        <div className="explore-toggle-button">
                        <button className={this.state.visibility == "list" ? "button-selected" : "button-deselected"} value="list" onClick={this.handleClick}>List</button>
                        </div>
                        <div className="explore-toggle-button">
                        <button className={this.state.visibility == "map" ? "button-selected" : "button-deselected"} value="map" onClick={this.handleClick}>Map</button>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        allrahui: state.rahui
    }
}

export default connect(mapStateToProps)(Explore);
