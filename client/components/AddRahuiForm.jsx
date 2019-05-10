import React from 'react'

class AddRahuiForm extends React.Component {
    constructor() {
        super()
        this.setState = {}
    }
    render() {
        return (
            <div>
                <h1>Add a Rahui</h1>
                <h2>Tell us about the rahui</h2>
                <div>
                    <form>
                        <select>
                            <option>iwi 1</option>
                            <option>iwi 2</option>
                            <option>iwi 3</option>
                        </select>

                        <select>
                            <option>hapu 1</option>
                            <option>hapu 2</option>
                            <option>hapu 3</option>
                        </select>

                        <br></br>

                        <input type="text" placeholder="Authoriser's Name" />

                        <br></br>

                        date placed <input type="date" />

                        <br></br>

                        date lifted <input type="date" />

                        <br></br>

                        <textarea name="message" placeholder="description" rows="10" cols="30" />

                        <br></br>

                        <textarea name="message" placeholder="korero" rows="20" cols="60" />

                        <br></br>

                        <input type="text" placeholder="Contact" />

                        <br></br>

                        <input type="submit" value="Add Rahui" />



                    </form>
                </div>


            </div >
        )
    }
}

export default AddRahuiForm