import React from 'react'
import { connect } from "react-redux";
import { registerUserRequest } from '../actions/register'
import { fetchAllIwi } from "../actions/iwi";
import { loginError } from '../actions/login';

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            first_name: null,
            middle_name: null,
            last_name: null,
            region: [],
            iwi: [],
            hapu: [],
            address: null,
            email: null,
            password: null,
            confirm_password: null,
            iwiSelected: null,
            hapuSelected: null,
            regionSelected: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);
        this.handleSelect3 = this.handleSelect3.bind(this);
        this.submit = this.submit.bind(this);
        this.submitAdd = this.submitAdd.bind(this);
        this.renderHapu = this.renderHapu.bind(this);
        this.renderIwi = this.renderIwi.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

    submit(e) {
        e.preventDefault()

        let { first_name, middle_name, last_name, address, email, password, confirm_password, iwi, hapu } = this.state

        if (confirm_password != password) {
            return this.props.dispatch(loginError("Passwords don't match"))
            console.log("Login Error- Passwords dont match")
        } else {
            this.props.dispatch(registerUserRequest({ first_name, middle_name, last_name, address, email, password, iwi, hapu }))
        }
    }

    submitAdd() {
        let region = [...this.state.region, this.state.regionSelected]
        let iwi = [...this.state.iwi, this.state.iwiSelected]
        let hapu = [...this.state.hapu, this.state.hapuSelected]

        this.setState({
            region: [...new Set(region)],
            iwi: [...new Set(iwi)],
            hapu: [...new Set(hapu)],
            regionSelected: null,
            iwiSelected: null,
            hapuSelected: null
        })
        console.log(this.state)
    }

    handleSelect(event) {
        this.setState({
            regionSelected: event.target.value,
        });
    }

    handleSelect2(event) {
        this.setState({
            iwiSelected: event.target.value,
        });
    }

    handleSelect3(event) {
        this.setState({
            hapuSelected: event.target.value,
        });
    }

    renderIwi() {
        const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]

        if (allIwiInRegion.length > 0) {
            return allIwiInRegion.map(iwi => {
                return < option htmlFor="iwi" > {Object.keys(iwi)[0]}</option >
            })
        }
    }
    renderHapu() {
        const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]
        const iwiIWant = this.state.iwiSelected
        const theIwiIFound = allIwiInRegion.filter(iwi => {
            return iwi[iwiIWant] != undefined
        })
        const allHapu = theIwiIFound[0][iwiIWant]
        if (allHapu.length > 0) {
            return allHapu.map(hapu => {
                return <option htmlFor="hapu">{hapu}</option>;
            })
        }
        else (<option>No hapū</option>)
    }
    render() {
        return (
            <div className="registerContainer">
                <h1>Register</h1>
                <h3>Ekore e tika kia noho he Maori rawakore ki tenei whenua; ehara tenei i te mea e ora ai tatou e tika ai ranei ratou. </h3>
                <p>Please register below to add a rahūi. There is a verficiation process to identify you. Please note that this process this may take up to three days.</p>
                <br></br>
                <form className="register-form" onSubmit={this.submit}>
                    <input className="inputRegister" name="first_name" type="text" placeholder="first name" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>

                    <input className="inputRegister" name="middle_name" type="text" placeholder="middle name/s" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>

                    <input className="inputRegister" name="last_name" type="text" placeholder="last name" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>

                    <div className="dropdownboxRegion">

                        <p>Select region:</p>
                        <select onChange={this.handleSelect}>
                            {this.props.area.map(area => {
                                return <option htmlFor="region">{area}</option>;
                            })}
                        </select>

                        {<p>Select iwi:</p>}
                        <select onChange={this.handleSelect2}>
                            {this.state.regionSelected ? (this.renderIwi()) : <option >-</option>}
                        </select>



                        {<p>Select hapū:</p>}
                        <select onChange={this.handleSelect3}>
                            {this.state.iwiSelected ? (
                                this.renderHapu()
                            ) : <option >-</option>}
                        </select>
                        <br></br>
                        <button className="addAnotherRegionButton" type="button" onClick={this.submitAdd}>Add Another Region/Iwi/Hāpu</button>
                        <br></br>
                    </div>
                    <div className="selectediwiRegister">Whakapapa <br></br>
                        Iwi:{this.state.iwi.map(iwi => { return <p>{iwi}, </p> })}<br></br>
                        Hapū:{this.state.hapu.map(hapu => { return <p>{hapu}, </p> })}


                    </div>
                    <br></br>

                    <br></br>

                    <input className="inputRegister" name="address" type="text" placeholder="address" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>


                    <input className="inputRegister" name="email" type="text" placeholder="email" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <input className="inputRegister" name="password" type="password" placeholder="password" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <input className="inputRegister" name="confirm_password" type="password" placeholder="confirm password" noValidate onChange={this.handleChange} />
                    <p>{this.props.auth.errorMessage}</p>
                    <br></br>
                    <button className="registerButton" name="submit">Register</button>
                    <br></br>


                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Register);