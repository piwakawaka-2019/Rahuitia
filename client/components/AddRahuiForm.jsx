import React from 'react'
import * as api from '../apis/iwi'



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
        this.fetchIwi = this.fetchIwi.bind(this)
    }
    componentDidMount() {
        this.fetchIwi()
    }

    fetchIwi() {
        return api.getIwi()
            .then(iwi => {
                console.log(iwi)
                this.setState({ iwi: iwi })
            })
            .catch(err => {
                this.setState({ errorMessage: err.message })
            })
    }

    render() {
        return (
            <div>
                <h1>Add a Rāhui</h1>
                <h2>Tell us about the rāhui</h2>
                <div>
                    <form>
                        <select>

                            <option></option>

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



                    </form>
                </div>


            </div >
        )
    }
}

export default AddRahuiForm