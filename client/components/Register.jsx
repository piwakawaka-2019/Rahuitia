import React from 'react'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {}
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
                <form>
                    <input name="firstName" type="text" placeholder="first name" />
                    <br></br>
                    <input name="middleNamme" type="text" placeholder="middle name/s" />
                    <br></br>
                    <input name="lastName" type="text" placeholder="last name" />
                    
                    {/* add rāhui and hapū drop downs here*/}
                    
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