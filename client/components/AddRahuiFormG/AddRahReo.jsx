import React, { Component } from "react";

class AddRahReo extends Component {
    render() { console.log(this.props)
      return ( 
<div>
<div>
<h1>Tāpirihia he Rāhui</h1>
<h2>Korero mai ki a matou mo te Rāhui. Ka tuhia enei korero ki te waa tirotiro.</h2>
<br></br>
<br></br>
<p>
Tohua koa te iwi me te hapū kua tohua te Rāhui:</p>
<p>Tīpako Rohe:</p>
<select onChange={this.handleSelect}>
    {this.props.area.map(area => {
        return <option htmlFor="region">{area}</option>;
    })}
</select>
<br></br>
<br></br>
{<p>Tīpako Iwi:</p>}
<select onChange={this.handleSelect2}>
    {this.props.data.regionSelected ? (this.renderIwi()) : <option>----------</option>}
</select>
<br></br>
<br></br>
{<p>Tīpako Hapū:</p>}
<select onChange={this.handleSelect3}>
    {this.props.data.iwiSelected ? (
        this.renderHapu()
    ) : <option>----------</option>}
</select>
<br></br>
<button type="button" onClick={this.submitAdd}>Tāpirihia tetahi atu Roopu Whakawhiti/Iwi/Hāpu</button>
<br></br>
<div> Iwi/Hāpu: <br></br> 
iwi:{this.props.data.iwi.map(iwi => {return <p>{iwi}, </p>})}<br></br> 
hapu:{this.props.data.hapu.map(hapu => {return <p>{hapu}, </p>})}<br></br> 
</div>
<br></br>
</div>
<br></br>
<br></br>
<p>Tēnā koa whakauruhia te ingoa o te tangata kua whakamanahia te rahūi:</p>
<input name="authoriser" type="text" placeholder="whakaaetia e" noValidate onChange={this.handleChange} />
<br></br>
{/* <br></br>
<p>Please enter your name:</p>
<input name="submittersName" type="text" placeholder="Submitted by" />
<br></br> */}
<br></br>
<p>
Kua whakanohoia te Rahūi ra</p>
<input name="datePlaced" type="date" noValidate onChange={this.handleChange} />
<br></br>
<br></br>
<p>Ka whakanuia te Rahūi:</p>
<input name="dateLifted" type="date" noValidate onChange={this.handleChange} />
<br></br>
<br></br>
<p>Tēnā koa tāpirihia he whakaahua poto o te rahūi i konei:</p>
<textarea name="description" type="text" placeholder="whakāturanga" rows="10" cols="60" noValidate onChange={this.handleChange} />
<br></br>
<br></br>
<p>Tēnā koa tāpirihia ētahi atu taipitopito o te rahūi i konei:</p>
<textarea name="korero" type="text" placeholder="kōrero" rows="20" cols="60" noValidate onChange={this.handleChange} />
<br></br>
<br></br>
<p>Tēnā koa whakauruhia ngā taipitopito whakapā ināianei:</p>
<input name="contact" type="text" placeholder="whakapa mai" noValidate onChange={this.handleChange} />
<br></br>
<br></br>
<button name="submit">Tāpirihia he Rāhui</button>
</div>
      )}
    }

    export default AddRahReo