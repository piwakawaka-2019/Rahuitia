import React, { Component } from "react";
import { connect } from 'react-redux'

class RegReo extends React.Component {
  constructor(props) {
      super(props);
      this.state = {  }
  }
  
  render() { 
    return (
  <div>
      <h1> Rēhita</h1>
      <br></br>
      <h3>Ko wai ka taea te whakakotahi i te Rāhui?</h3>
      <br></br>
      <p> Me rēhita koe ki te tāpiri i te Rāhui.He tukanga taunakitanga e taea ana kia toru ra.</p>
      <br></br>
      <form className="register-form" onSubmit={this.submit}>
          <input name="first_name" type="text" placeholder="ingoa tuatahi" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="middle_name" type="text" placeholder="ingoa waenganui" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="last_name" type="text" placeholder="ingoa whakamutunga" noValidate onChange={this.handleChange} />
          <br></br>
          {/* Add iwi */}


          <br></br>
          <p> Tīpako Rohe:</p>
          <select onChange={this.handleSelect}>
              {this.props.area.map(area => {
                  return <option htmlFor="region">{area}</option>;
              })}
          </select>

          <br></br>
          <br></br>

          {<p>Tīpako Iwi:</p>}
          <select onChange={this.handleSelect2}>
              {this.props.regionSelected ? (this.renderIwi()) : <option>----------</option>}
          </select>

          <br></br>
          <br></br>

          {<p>Tīpako Hapū:</p>}
          <select onChange={this.handleSelect3}>
              {this.props.iwiSelected ? (
                  this.renderHapu()
              ) : <option>----------</option>}
          </select>
          <br></br>      
          <button type="button" onClick={this.submitAdd}>Tāpirihia tetahi atu Rohe/ Iwi/Hāpu</button>
          <br></br>

          <div>To Whakapapa: <br></br> 
          iwi:{this.props.iwi.map(iwi => {return <p>{iwi}, </p>})}<br></br> 
          hapu:{this.props.hapu.map(hapu => {return <p>{hapu}, </p>})}<br></br> 
          </div>

          <br></br>                    
          <input name="address" type="text" placeholder="wāhitau" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="email" type="text" placeholder="īmera" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="password" type="password" placeholder="kupuhipa" noValidate onChange={this.handleChange} />
          <br></br>
          <input name="confirm_password" type="password" placeholder="whakapūmau i te kupuhipa" noValidate onChange={this.handleChange} />
          <br></br>
          <button name="submit">Tuku</button>
      </form>
    </div>)
    }}

function mapStateToProps(state) {
  return {
    lang: state.toggle
  }
}

export default connect (mapStateToProps)(RegReo);