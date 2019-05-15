// import React from 'react'
// import { connect } from "react-redux";
// import { registerUserRequest } from '../../actions/register'
// import { fetchAllIwi } from "../../actions/iwi";
// import RegEng from "./RegEng"
// import RegReo from "./RegReo"
// import { loginError } from '../../actions/login';

// class Register extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             first_name: null,
//             middle_name: null,
//             last_name: null,
//             region: [],
//             iwi: [],
//             hapu: [],
//             address: null,
//             email: null,
//             password: null,
//             confirm_password: null,
//             iwiSelected: null,
//             hapuSelected: null,
//             regionSelected: null,
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSelect = this.handleSelect.bind(this);
//         this.handleSelect2 = this.handleSelect2.bind(this);
//         this.handleSelect3 = this.handleSelect3.bind(this);
//         this.submit = this.submit.bind(this);
//         this.submitAdd = this.submitAdd.bind(this);
//         this.renderHapu = this.renderHapu.bind(this);
//         this.renderIwi = this.renderIwi.bind(this);
//     }

//     componentDidMount() {
//         this.props.dispatch(fetchAllIwi())
//     }

//     handleChange(e) {
//         e.preventDefault()
//         const { name, value } = e.target
//         this.setState({ [name]: value });
//     }

//     submit(e) {
//         e.preventDefault()

//         let { first_name, middle_name, last_name, address, email, password, confirm_password, iwi, hapu } = this.state
        
//         if (confirm_password != password){ 
//             return this.props.dispatch(loginError("Passwords don't match"))
//             console.log("Login Error- Passwords dont match")
//         } else { 
//             this.props.dispatch(registerUserRequest({ first_name, middle_name, last_name, address, email, password, iwi, hapu }))
//         }
//     }

//     submitAdd(){
//         let region = [...this.state.region, this.state.regionSelected]
//         let iwi= [...this.state.iwi, this.state.iwiSelected]
//         let hapu = [...this.state.hapu, this.state.hapuSelected]

//         this.setState({
//             region:[...new Set(region)],
//             iwi:[...new Set(iwi)],
//             hapu:[...new Set(hapu)],
//             regionSelected: null,
//             iwiSelected: null,
//             hapuSelected: null
//         })
//         console.log(this.state)
//     }

//     handleSelect(event) {
//         this.setState({
//             regionSelected: event.target.value,
//         });
//     }

//     handleSelect2(event) {
//         this.setState({
//             iwiSelected: event.target.value,
//         });
//     }

//     handleSelect3(event) {
//         this.setState({
//             hapuSelected: event.target.value,
//         });
//     }

//     renderIwi() {

//         const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]

//         if (allIwiInRegion.length > 0) {
//             return allIwiInRegion.map(iwi => {
//                 return < option htmlFor="iwi" > {Object.keys(iwi)[0]}</option >
//             })
//         }
//     }

//     renderHapu() {

//         const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]
//         const iwiIWant = this.state.iwiSelected
//         const theIwiIFound = allIwiInRegion.filter(iwi => {
//             return iwi[iwiIWant] != undefined
//         })

//         const allHapu = theIwiIFound[0][iwiIWant]

//         if (allHapu.length > 0) {
//             return allHapu.map(hapu => {
//                 return <option htmlFor="hapu">{hapu}</option>;
//             })
//         }
//         else (<option>No hapū</option>)
//         }

//     render() {
//         return (
//             <div>  
//         {this.props.lang == "eng" ? <RegEng {...this.props} {...this.state}/> : <RegReo {...this.props} {...this.state}/>}
 
//             </div>
//         )
//         }}
    

// const mapStateToProps = state => {
//     return {
//         alliwi: state.iwi,
//         area: state.area,
//         lang: state.toggle,
//         auth: state.auth
//     }
// }

// export default connect(mapStateToProps)(Register);