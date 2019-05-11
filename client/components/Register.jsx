import React from 'react'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Add a Rāhui</h1>
                <br></br>
                <h3>Ekore e tika kia noho he Maori rawakore ki tenei whenua; ehara tenei i te mea e ora ai tatou e tika ai ranei ratou. </h3>
                <br></br>
                <h3>Who can add a rāhui?</h3>
                <br></br>
                <p>You must register to add a rahui. There is a verficiation process to identify you. This may take 1–3 days.</p>
                <br></br>
                <form>
                    <input type="text" placeholder="first name" />
                    <br></br>
                    <input type="text" placeholder="middle name/s" />
                    <br></br>
                    <input type="text" placeholder="last name" />
                    <br></br>
                    select iwi/s<select><option></option></select>
                    <input type="button" value="add another iwi" />
                    <br></br>
                    select hapu/s<select><option></option></select>
                    <input type="button" value="add another hapu" />
                    <br></br>
                    <input type="text" placeholder="email address" />
                    <br></br>
                    <input type="text" placeholder="password" />
                    <br></br>
                    <input type="text" placeholder="confirm password" />
                    <br></br>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}

export default Register 