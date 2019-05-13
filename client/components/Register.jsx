import React from 'react'
import { connect } from "react-redux";
import { registerUserRequest } from '../actions/register'
import { fetchAllIwi } from "../actions/iwi";

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            first_name: null,
            middle_name: null,
            last_name: null,
            iwi: null,
            hapu: null,
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
        this.submit = this.submit.bind(this)
        this.renderHapu = this.renderHapu.bind(this)
        this.renderIwi = this.renderIwi.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value }, () => console.log(this.state));
    }

    submit(e) {
        e.preventDefault()
        let { first_name, middle_name, last_name, iwi, hapu, address, email, password } = this.state
        if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
        this.props.dispatch(registerUserRequest({ first_name, middle_name, last_name, iwi, hapu, address, email, password }))
    }

    handleSelect(event) {
        this.setState({
            regionSelected: event.target.value
        });
    }

    handleSelect2(event) {
        this.setState({
            iwiSelected: event.target.value
        });
    }

    handleSelect3(event) {
        this.setState({
            hapuSelected: event.target.value
        });
    }

    renderIwi() {
        const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]

        if (allIwiInRegion.length > 0) {

            return allIwiInRegion.map(iwi => {
                console.log(Object.keys(iwi)[0])

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
            <div>
                <h1>Register</h1>
                <br></br>
                <h3>Ekore e tika kia noho he Maori rawakore ki tenei whenua; ehara tenei i te mea e ora ai tatou e tika ai ranei ratou. </h3>
                <br></br>
                <h3>Who can add a rāhui?</h3>
                <br></br>
                <p>You must register to add a rahui. There is a verficiation process to identify you. This may take up to three days.</p>
                <br></br>
                <form className="register-form" onSubmit={this.submit}>
                    <input type="text" placeholder="first name" noValidate onChange={this.handleChange} />
                    <br></br>
                    <input type="text" placeholder="middle name/s" noValidate onChange={this.handleChange} />
                    <br></br>
                    <input type="text" placeholder="last name" noValidate onChange={this.handleChange} />
                    <br></br>
                    {/* Add iwi */}


                    <br></br>
                    <p>Select region:</p>
                    <select onChange={this.handleSelect}>
                        {this.props.area.map(area => {
                            return <option htmlFor="region">{area}</option>;
                        })}
                    </select>

                    <br></br>
                    <br></br>

                    {<p>Select iwi:</p>}
                    <select onChange={this.handleSelect2}>
                        {this.state.regionSelected ? (this.renderIwi()) : <option>----------</option>}
                    </select>

                    <br></br>
                    <br></br>

                    {<p>Select hapū:</p>}
                    <select onChange={this.handleSelect3}>
                        {this.state.iwiSelected ? (
                            this.renderHapu()
                        ) : <option>----------</option>}
                    </select>




                    <br></br>
                    <br></br>
                    <input type="text" placeholder="password" noValidate onChange={this.handleChange} />
                    <br></br>
                    <input type="text" placeholder="confirm password" noValidate onChange={this.handleChange} />
                    <br></br>
                </form>
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
    }
}

export default connect(mapStateToProps)(Register);