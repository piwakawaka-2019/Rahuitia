import React from 'react'
import decode from 'jwt-decode'

import { getUserTokenInfo } from '../utils/auth'

// import data from '../apis/iwi'
import { connect } from "react-redux";
import { fetchAllIwi } from "../actions/iwi";
import { writeRahui } from "../apis/rahui"
import { fetchAllRahui } from '../actions/rahui'

class AddRahuiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: [],
            iwi: [],
            hapu: [],
            geoRef: null,
            authoriser: null,
            datePlaced: null,
            dateLifted: "This Rāhui is still active",
            description: null,
            korero: null,
            contact: null,
            iwiSelected: null,
            hapuSelected: null,
            regionSelected: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);
        this.handleSelect3 = this.handleSelect3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderHapu = this.renderHapu.bind(this)
        this.renderIwi = this.renderIwi.bind(this)
        this.submitAdd = this.submitAdd.bind(this);

    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }

    handleSubmit(e) {
        e.preventDefault()

        const rahui = {
            userId: getUserTokenInfo().user_id,
            region: this.state.region,
            iwi: this.state.iwi,
            hapu: this.state.hapu,
            description: this.state.description,
            geoRef: this.props.coordinates,
            korero: this.state.korero,
            datePlaced: this.state.datePlaced,
            dateLifted: this.state.dateLifted,
            contact: this.state.contact,
            authoriser: this.state.authoriser
        }

        // should be a dispatching an action
        writeRahui(
            rahui
        ).then(
            () => {
                this.props.dispatch(fetchAllRahui())
            }
        )

        window.location = `/#/explore`
    }

    submitAdd(){
        let region = [...this.state.region, this.state.regionSelected]
        let iwi= [...this.state.iwi, this.state.iwiSelected]
        let hapu = [...this.state.hapu, this.state.hapuSelected]

        this.setState({
            region:[...new Set(region)],
            iwi:[...new Set(iwi)],
            hapu:[...new Set(hapu)],
            regionSelected: null,
            iwiSelected: null,
            hapuSelected: null
        })
        
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value });
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
                <form
                    onSubmit={this.handleSubmit}
                    noValidate
                >
                    <div>
                        <h1>Add a Rāhui</h1>
                        <h2>Tell us about the rāhui. This information will be shared on the explore page.</h2>

                        <br></br>
                        <br></br>

                        <p>Please select the iwi and/or hapū that has placed the rāhui:</p>
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
                        <button type="button" onClick={this.submitAdd}>Add Another Associated Region/Iwi/Hāpu</button>
                    <br></br>
                    <div>Associated iwi/hāpu: <br></br> 
                    iwi:{this.state.iwi.map(iwi => {return <p>{iwi}, </p>})}<br></br> 
                    hapu:{this.state.hapu.map(hapu => {return <p>{hapu}, </p>})}<br></br> 
                    </div>
                    <br></br>
                    </div>

                    <br></br>
                    <br></br>

                    <p>Please enter the name of the person who has authorised the rahūi:</p>

                    <input name="authoriser" type="text" placeholder="Authorised by" noValidate onChange={this.handleChange} />

                    <br></br>
                    {/* <br></br>

                    <p>Please enter your name:</p>

                    <input name="submittersName" type="text" placeholder="Submitted by" />

                    <br></br> */}
                    <br></br>


                    <p>Date rahūi placed:</p>
                    <input name="datePlaced" type="date" noValidate onChange={this.handleChange} />

                    <br></br>
                    <br></br>


                    <p>Date rahūi lifted:</p>
                    <input name="dateLifted" type="date" noValidate onChange={this.handleChange} />

                    <br></br>
                    <br></br>

                    <p>Please add a brief description of the rahūi here:</p>

                    <textarea name="description" type="text" placeholder="description" rows="10" cols="60" noValidate onChange={this.handleChange} />

                    <br></br>
                    <br></br>

                    <p>Please add further details of the rahūi here:</p>

                    <textarea name="korero" type="text" placeholder="korero" rows="20" cols="60" noValidate onChange={this.handleChange} />

                    <br></br>
                    <br></br>

                    <p>Please enter contact details here:</p>

                    <input name="contact" type="text" placeholder="Email Address" noValidate onChange={this.handleChange} />

                    <br></br>
                    <br></br>

                    <button name="submit">Add Rāhui</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
        coordinates: state.coords
    }
}

export default connect(mapStateToProps)(AddRahuiForm);
