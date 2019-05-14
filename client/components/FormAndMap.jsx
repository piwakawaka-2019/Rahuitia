import React from "react";
import SplitterLayout from 'react-splitter-layout';
import { connect } from "react-redux";
import ReactMap from "./ReactMap";
import AddRahuiForm from "./AddRahuiFormG/AddRahuiForm";



class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   

    render() { 
        console.log( "explore", this.props)
        return (  
            <div >

                <SplitterLayout >
                <div >
                 <ReactMap/>
                </div> 
                
                <div className="detailwrapper">
                <AddRahuiForm/> 
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
 
export default connect(mapStateToProps)(Explore);
