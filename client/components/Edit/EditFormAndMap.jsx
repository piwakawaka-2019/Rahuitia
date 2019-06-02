import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"
import ReactMap from "../ReactMap";
import EditRahuiForm from "./EditRahuiForm";

import { isAuthenticated } from "../../utils/auth"


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return isAuthenticated() ? (
            <div className="mapBackground">
                <div >
                    <ReactMap />
                </div>
                <div className="overlayNew">
                    <EditRahuiForm rahuiId={this.props.match.params.id}/>
                </div>
            </div>
        ) : <Redirect to='/register' />
    }
}

const mapStateToProps = state => {
    return {
        allrahui: state.rahui,
        alliwi: state.iwi,
        area: state.area,
        coordinates: state.coords,
        lang: state.toggle
    }
}

export default connect(mapStateToProps)(Edit);



// import React from "react";
// import SplitterLayout from 'react-splitter-layout';
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom"
// import ReactMap from "../ReactMap";
// import EditRahuiForm from "./EditRahuiForm";
// import { isAuthenticated } from "../../utils/auth"


// class Edit extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }

   

//     render() { 
//         return isAuthenticated() ? (  
//             <div >

//                 <SplitterLayout >
//                 <div >
//                  <ReactMap/>
//                 </div> 
                
//                 <div className="rahui-text">
//                 {this.props.lang == "eng" ? <EditRahuiFormEng rahuiId={this.props.match.params.id}/>  : <EditRahuiFormReo rahuiId={this.props.match.params.id}/>}
//                 </div>
               
//                 </SplitterLayout>
                
//             </div>
//         ) : <Redirect to='/register'/>
//     }
// }

// const mapStateToProps = state => {
//     return {
//         allrahui: state.rahui,
//         alliwi: state.iwi,
//         area: state.area,
//         coordinates: state.coords,
//         lang: state.toggle
//     }
// }

 
// export default connect(mapStateToProps)(Edit);