import React, { Component } from "react";

class AddRahEng extends Component {
    render() {
      return (
<div>
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
    {this.props.data.regionSelected ? (this.renderIwi()) : <option>----------</option>}
</select>
<br></br>
<br></br>
{<p>Select hapū:</p>}
<select onChange={this.handleSelect3}>
    {this.props.data.iwiSelected ? (
        this.renderHapu()
    ) : <option>----------</option>}
</select>
<br></br>
<button type="button" onClick={this.submitAdd}>Add Another Associated Region/Iwi/Hāpu</button>
<br></br>
<div>Associated iwi/hāpu: <br></br> 
iwi:{this.props.data.iwi.map(iwi => {return <p>{iwi}, </p>})}<br></br> 
hapu:{this.props.data.hapu.map(hapu => {return <p>{hapu}, </p>})}<br></br> 
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
</div>
      )}
    }

export default AddRahEng