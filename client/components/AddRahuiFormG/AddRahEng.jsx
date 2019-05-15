import React, { Component } from "react";

class AddRahEng extends Component {
    render() {
      return (
        <div>
        <form
            onSubmit={this.handleSubmit}
            noValidate
        >
            <div>
            <h1>Add a Rāhui</h1>
            <div className="step"> step one</div>
           
                <div>
                    <img src="mapthumbnail.png" className="thumbnail" />
                    <h2 className="one">Zoom into an area on the map and draw an outline for where you want to place the rāhui.</h2>
                <hr></hr>
               
                </div>

                
            <div className="step"> step two</div>
                
                <h2>Tell us about the rāhui. This information will be shared on the explore page.</h2>

               <div className="dropdownbox">
                    <h3>Iwi and/or Hapū placing the rāhui:</h3>
                    <p>Select region:</p>
                    <select onChange={this.handleSelect}>
                    {this.state.regionSelected == null && <option>Choose Region</option> }
                        {this.props.area.map(area => {
                            return <option htmlFor="region">{area}</option>;
                        })}
                    </select>
                
                    {<p>Select iwi:</p>}
                    <select onChange={this.handleSelect2}>
                    {this.state.iwiSelected == null && <option>Choose Iwi</option> }
                        {this.state.regionSelected ? (this.renderIwi()) : <option disabled></option>}
                    </select>
                    
                    {<p>Select hapū:</p>}
                    <select onChange={this.handleSelect3}>
                    {this.state.hapuSelected == null && <option>Choose hapu</option> }
                        {this.state.iwiSelected ? (
                            this.renderHapu()
                        ) : <option disabled></option>}
                    </select> <br />
                    <button type="button" className="secondarybutton" onClick={this.submitAdd}>{this.state.iwihapuButtonText}</button>
                    <br></br>
                </div> 
               
                    {this.state.iwihapuboxIsVisible ? <div className="selectediwi">
                    <h3> Associated iwi/hāpu:</h3> 
                    <p>iwi:</p>{this.state.iwi.map(iwi => {return <p>{iwi} </p>})}
                    <p>hapu:</p>{this.state.hapu.map(hapu => {return <p>{hapu} </p>})}
                    </div> : null }
               

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

            <textarea name="description" type="text" placeholder="description" rows="5" cols="60" noValidate onChange={this.handleChange} />

            <br></br>
            <br></br>

            <p>Please add further details of the rahūi here:</p>

            <textarea name="korero" type="text" placeholder="korero" rows="10" cols="60" noValidate onChange={this.handleChange} />

            <br></br>
            <br></br>

            <p>Please enter contact details here:</p>

            <input name="contact" type="text" placeholder="Email Address" noValidate onChange={this.handleChange} />

            <br></br>
          

            <button name="submit">Add Rāhui</button>

        </form>
        <div className="spaceme" />
    </div>
      )}
    }

export default AddRahEng