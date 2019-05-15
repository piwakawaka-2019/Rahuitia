import React, { Component } from "react";

class AddRahReo extends Component {
    render() { console.log(this.props)
      return ( 
        <div>
        <form
            onSubmit={this.handleSubmit}
            noValidate
        >
            <div>
            <h1>Tāpirihia he Rāhui</h1>
            <div className="step"> Takahia Tetahi</div>
           
                <div>
                    <img src="mapthumbnail.png" className="thumbnail" />
                    <h2 className="one">Tomo mai ki tetahi rohe i runga i te mahere me te tuhi i tetahi waahanga mo te wahi e hiahia ana koe ki te whakatakoto i te Rāhui.</h2>
                <hr></hr>
               
                </div>

                
            <div className="step"> Takahia e Rua</div>
                
                <h2>Korero mai ki a matou te Rāhui. Ka tuhia enei korero ki te waa tirotiro.</h2>

               <div className="dropdownbox">
                    <h3>
                        Te Iwi me te Hapū e whakatakoto ana i te Rāhui:
                    </h3>
                    <p>Tīpako Rohe:</p>
                    <select onChange={this.handleSelect}>
                    {this.state.regionSelected == null && <option>Whiriwhiri Rohe</option> }
                        {this.props.area.map(area => {
                            return <option htmlFor="region">{area}</option>;
                        })}
                    </select>
                
                    {<p>Tīpako Iwi:</p>}
                    <select onChange={this.handleSelect2}>
                    {this.state.iwiSelected == null && <option>Whiriwhiri Iwi</option> }
                        {this.state.regionSelected ? (this.renderIwi()) : <option disabled></option>}
                    </select>
                    
                    {<p>Tīpako Hapū:</p>}
                    <select onChange={this.handleSelect3}>
                    {this.state.hapuSelected == null && <option>Whiriwhiri Hapu</option> }
                        {this.state.iwiSelected ? (
                            this.renderHapu()
                        ) : <option disabled></option>}
                    </select> <br />
                    <button type="button" className="secondarybutton" onClick={this.submitAdd}>{this.state.iwihapuButtonText}</button>
                    <br></br>
                </div> 
               
                    {this.state.iwihapuboxIsVisible ? <div className="selectediwi">
                    <h3>Iwi/hāpu:</h3> 
                    <p>Iwi:</p>{this.state.iwi.map(iwi => {return <p>{iwi} </p>})}
                    <p>Hapu:</p>{this.state.hapu.map(hapu => {return <p>{hapu} </p>})}
                    </div> : null }
               

            <br></br>
            </div>

            <br></br>
            <br></br>

            <p>Tēnā koa whakauruhia te ingoa o te tangata kua whakamanahia te Rāhui:</p>

            <input name="authoriser" type="text" placeholder="Kua whakaaetia e" noValidate onChange={this.handleChange} />

            <br></br>
            {/* <br></br>

            <p>Please enter your name:</p>

            <input name="submittersName" type="text" placeholder="Submitted by" />

            <br></br> */}
            <br></br>


            <p>I whakaturia te Rāhui ra::</p>
            <input name="datePlaced" type="date" noValidate onChange={this.handleChange} />

            <br></br>
            <br></br>


            <p>I whakanuia te Rāhui:</p>
            <input name="dateLifted" type="date" noValidate onChange={this.handleChange} />

            <br></br>
            <br></br>

            <p>Tēnā koa tāpirihia he whakaahua poto o te Rāhui i konei:</p>

            <textarea name="description" type="text" placeholder="whakaahua" rows="5" cols="60" noValidate onChange={this.handleChange} />

            <br></br>
            <br></br>

            <p>Tēnā koa tāpirihia ētahi atu kōrero mo te Rāhui i konei:</p>

            <textarea name="korero" type="text" placeholder="korero" rows="10" cols="60" noValidate onChange={this.handleChange} />

            <br></br>
            <br></br>

            <p>Tēnā koa tuhia ngā taipitopito whakapā ki konei</p>

            <input name="contact" type="text" placeholder="Īmera" noValidate onChange={this.handleChange} />

            <br></br>
          

            <button name="submit">Tāpirihia he Rāhui</button>

        </form>
        <div className="spaceme" />
    </div>
      )}
    }

    export default AddRahReo