import React from 'react'
// import data from '../apis/iwi'
import { connect } from "react-redux";
import { fetchAllIwi } from "../actions/iwi";
import { writeRahui } from "../apis/rahui"

import request from "superagent";

class AddRahuiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iwiSelected: null,
            hapuSelected: null,
            regionSelected: null,
            region: null,
            iwi: null,
            hapu: null,
            geoRef: null,
            authoriser: null,
            datePlaced: null,
            dateLifted: "This Rāhui is still active",
            description: null,
            korero: null,
            contact: null,

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);
        this.handleSelect3 = this.handleSelect3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }

    handleSubmit(e) {
        e.preventDefault()

        const rahui = {
            userId: 5,
            iwi: this.state.iwiSelected,
            hapu: this.state.hapuSelected,
            description: this.state.description,
            geoRef: this.props.coordinates,
            korero: this.state.korero,
            datePlaced: this.state.datePlaced,
            dateLifted: this.state.dateLifted,
        }

        console.log(rahui)

        // writeRahui(
        //     rahui
        // )
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value }, () => console.log(this.state));
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

    render() {

        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    noValidate
                >
                    <div>
                        <h1>Add a Rāhui</h1>
                        <h2>Tell us about the rāhui</h2>
                        <p>select region</p>
                        <select onChange={this.handleSelect}>
                            {this.props.area.map(area => {
                                return <option htmlFor="region">{area}</option>;
                            })}
                        </select>
                        {this.state.regionSelected && <p>select iwi</p>}
                        {/* get all the iwi based on region */}
                        {this.state.regionSelected && (
                            <div>
                                <select onChange={this.handleSelect2}>
                                    {this.props.alliwi.map(area => {
                                        // console.log(area, "this one here")

                                        if (area[this.state.regionSelected] != undefined) {
                                            return area[this.state.regionSelected].map(region => {
                                                for (var iwi in region) {
                                                    return <option htmlFor="iwi">{iwi}</option>;
                                                }
                                            });
                                        }
                                    })}
                                </select>
                            </div>
                        )}
                        {/* confirm iwi selection in state */}
                        {this.state.iwiSelected && <p>select hapu</p>}
                        {this.state.iwiSelected && (
                            <div>
                                <select onChange={this.handleSelect3}>
                                    {this.props.alliwi.map(area => {
                                        if (area[this.state.regionSelected] != undefined) {
                                            return area[this.state.regionSelected].map(region => {
                                                if (
                                                    region[this.state.iwiSelected] != undefined &&
                                                    region[this.state.iwiSelected].length > 0
                                                ) {
                                                    // console.log(region[this.state.iwiSelected]);
                                                    return region[this.state.iwiSelected].map(hapu => {
                                                        return <option htmlFor="hapu">{hapu}</option>;
                                                    });
                                                } else if (
                                                    region[this.state.iwiSelected] != undefined &&
                                                    region[this.state.iwiSelected].length <= 0
                                                ) {
                                                    return <option>No hapu found</option>;
                                                }
                                            });
                                        }
                                    })}
                                </select>
                                {this.state.hapuSelected && <p>next step</p>}
                            </div>
                        )}
                    </div>

                    <input name="authoriser" type="text" placeholder="Authoriser's Name" noValidate onChange={this.handleChange} />

                    <br></br>

                    date placed <input name="datePlaced" type="date" noValidate onChange={this.handleChange} />

                    <br></br>

                    date lifted <input name="dateLifted" type="date" noValidate onChange={this.handleChange} />

                    <br></br>

                    <textarea name="description" type="text" placeholder="description" rows="10" cols="60" noValidate onChange={this.handleChange} />

                    <br></br>

                    <textarea name="korero" type="text" placeholder="korero" rows="20" cols="60" noValidate onChange={this.handleChange} />

                    <br></br>

                    <input name="contact" type="text" placeholder="Contact Email" noValidate onChange={this.handleChange} />

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
