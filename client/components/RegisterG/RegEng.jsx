import React, { Component } from "react";
import { connect } from 'react-redux'
import Register from './Register'


class RegEng extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }
   render() 
  { 
    return (
  <div>
      <h1>Register</h1>
      <br></br>
      <h3>Who can add a rāhui?</h3>
      <br></br>
      <p>You must register to add a rahui. There is a verification process to identify you. This may take up to three days.</p>
      <br></br>
      <form className="register-form" onSubmit={this.submit}>
          <input name="first_name" type="text" placeholder="first name" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="middle_name" type="text" placeholder="middle name/s" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="last_name" type="text" placeholder="last name" noValidate onChange={this.handleChange} />
          <br></br>
          {/* Add iwi */}


          <br></br>
          <p>Select Region:</p>
          <select onChange={this.handleSelect}>
              {this.props.area.map(area => {
                  return <option htmlFor="region">{area}</option>;
              })}
          </select>

          <br></br>
          <br></br>

          {<p>Select Iwi:</p>}
          <select onChange={this.handleSelect2}>
              {this.props.regionSelected ? (this.renderIwi()) : <option>----------</option>}
          </select>

          <br></br>
          <br></br>

          {<p>Select Hapū:</p>}
          <select onChange={this.handleSelect3}>
              {this.props.iwiSelected ? (
                  this.renderHapu()
              ) : <option>----------</option>}
          </select>
          <br></br>      
          <button type="button" onClick={this.submitAdd}>Add Another Region/Iwi/Hāpu</button>
          <br></br>

          <div>Your Whakapapa: <br></br> 
          iwi:{this.props.iwi.map(iwi => {return <p>{iwi}, </p>})}<br></br> 
          hapu:{this.props.hapu.map(hapu => {return <p>{hapu}, </p>})}<br></br> 
          </div>

          <br></br>                    
          <input name="address" type="text" placeholder="address" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="email" type="text" placeholder="email" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="password" type="password" placeholder="password" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="confirm_password" type="password" placeholder="confirm password" noValidate onChange={this.handleChange} />
          <br></br>
          <button name="submit">Submit</button>
      </form>

  </div>)
  }}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect (mapStateToProps)(RegEng);