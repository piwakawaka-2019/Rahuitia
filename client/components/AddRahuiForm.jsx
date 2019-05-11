import React from 'react'
// import data from '../apis/iwi'
import { connect } from "react-redux";
import { fetchAllIwi } from "../actions/iwi";

class AddRahuiForm extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            iwi: [],
            // hapu: [],
            // authoriser: "",
            // datePlaced: 
            // dateLifted:
            // description: "",
            // korero: "",
            // contactEmail: "",
        }
        // this.fetchIwi = this.fetchIwi.bind(this)
    }


    // fetchIwi() {
    //     return data.getIwi()
    //         .then(iwi => {
    //             console.log(iwi)
    //             this.setState({ iwi: iwi })
    //         })
    //         .catch(err => {
    //             this.setState({ errorMessage: err.message })
    //         })
    // }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }


    // }


    render() {
        // console.log(11, this.props)
        fetchAllIwi()

        // .then(iwi => {
        //     console.log(44, iwi)
        // })
        return (


            // const results = []
            // this gets all of the iwi's
            // {
            //     this.props.alliwi.map(iwi => {
            //         results.push(Object.keys(iwi))
            //     })
            // }
            // this merges all of the iwis into one array
            // var merged = [].concat.apply([], results);
            // console.log(results)
            // const example_hapu = []
            // this.props.alliwi[0] ? example_hapu.push(this.props.alliwi[0]['Te Roroa']) : null
            // console.log(example_hapu[0]);

            // return (
            <div>


                {/* {
                    data.map(regions => {
                        return regions["Te Tai Tokerau"].map(hapu => {
                            return hapu["Ngāti Kahu"].map(item => {
                                return console.log(item);
                            });
                        });
                    })
                } */}

                <h1>Add a Rāhui</h1>
                <h2>Tell us about the rāhui</h2>
                <form>
                    <select>
                        {/* this maps over iwis and prints them as options */}
                        {/* {merged.map(iwi => {
                            return <option key={iwi}>{iwi}</option>
                        })} */}
                    </select>

                    <br></br>

                    <select>
                        {/* this maps over iwis and prints them as options */}

                        {/* {example_hapu.map(hapu => {
                            console.log(hapu);
                            return hapu.map(item => {
                                return <option>{item}</option>
                            }) */}
                        })}
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



                </form>
            </div>
        )
    }
}




const mapStateToProps = state => {
    return {
        alliwi: state.iwi
    }
}

export default connect(mapStateToProps)(AddRahuiForm);
// export default AddRahuiForm

