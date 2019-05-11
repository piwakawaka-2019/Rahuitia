import React from 'react'
// import data from '../apis/iwi'
import { connect } from "react-redux";
import { fetchAllIwi } from "../actions/iwi";





class AddRahuiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iwiSelected: null,
            hapuSelected: null,
            regionSelected: null
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);
        this.handleSelect3 = this.handleSelect3.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }



    handleSelect(event) {
        console.log(event.target.value);
        this.setState({
            regionSelected: event.target.value
        });
    }

    handleSelect2(event) {
        console.log(event.target.value);
        this.setState({
            iwiSelected: event.target.value
        });
    }

    handleSelect3(event) {
        console.log(event.target.value);
        this.setState({
            hapuSelected: event.target.value
        });
    }

    render() {


        console.log(this.props && this.props.alliwi, "here")
        console.log(this.props.area, "area")
        return (
            <div>
                (
      <div>
                    <h1>Welcome</h1>
                    <p>pick an area</p>
                    <select onChange={this.handleSelect}>
                        {this.props.area.map(area => {
                            return <option>{area}</option>;
                        })}
                    </select>
                    {this.state.regionSelected && <p>select an iwi</p>}
                    {/* get all the iwi based on region */}
                    {this.state.regionSelected && (
                        <div>
                            <select onChange={this.handleSelect2}>
                                {this.props.alliwi.map(area => {
                                    // console.log(area, "this one here")

                                    if (area[this.state.regionSelected] != undefined) {
                                        return area[this.state.regionSelected].map(region => {
                                            for (var iwi in region) {
                                                return <option>{iwi}</option>;
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
                                                console.log(region[this.state.iwiSelected]);
                                                return region[this.state.iwiSelected].map(hapu => {
                                                    return <option>{hapu}</option>;
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
                            {this.state.hapuSelected && <p>Congrats you picked everything</p>}
                        </div>
                    )}
                </div>
                );



                {/* <h1>Add a Rāhui</h1>
                <h2>Tell us about the rāhui</h2>
                <form>
                        <select onChange={this.handleSelect3}>
                            {this.props.alliwi.map(area => {
                                if (area[this.state.regionSelected] != undefined) {
                                    return area[this.state.regionSelected].map(region => {
                                        if (
                                            region[this.state.iwiSelected] != undefined &&
                                            region[this.state.iwiSelected].length > 0
                                        ) {
                                            console.log(region[this.state.iwiSelected]);
                                            return region[this.state.iwiSelected].map(hapu => {
                                                return <option>{hapu}</option>;
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

                    <br></br>

                    <select>
                        <option></option>
                    </select>

                    <br></br>

                    <input type="text" placeholder="Authoriser's Name" />

                    <br></br>

                    date placed <input type="date" />

                    <br></br>

                    date lifted <input type="date" />

                    <br></br>

                    <textarea name="message" placeholder="description" rows="10" cols="60" />

                    <br></br>

                    <textarea name="message" placeholder="korero" rows="20" cols="60" />

                    <br></br>

                    <input type="text" placeholder="Contact Email" />

                    <br></br>

                    <input type="submit" value="Add Rahui" />

                </form> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
    }
}

export default connect(mapStateToProps)(AddRahuiForm);
