import React from 'react'
import decode from 'jwt-decode'

import { getUserTokenInfo } from '../../utils/auth'

// import data from '../apis/iwi'
import { connect } from "react-redux";
import { fetchAllIwi } from "../../actions/iwi";
import { writeRahui } from "../../apis/rahui"
import { fetchAllRahui } from '../../actions/rahui'
import AddRahEng from './AddRahEng'

import { toggleLang } from "../../actions/toggle";

class AddRahReo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: [],
            iwi: [],
            hapu: [],
            geoRef: null,
            authoriser: null,
            datePlaced: null,
            dateLifted: "This Rāhui is still active",
            description: null,
            korero: null,
            contact: null,
            iwiSelected: null,
            hapuSelected: null,
            regionSelected: null,
            iwihapuboxIsVisible: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelect2 = this.handleSelect2.bind(this);
        this.handleSelect3 = this.handleSelect3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderHapu = this.renderHapu.bind(this)
        this.renderIwi = this.renderIwi.bind(this)
        this.submitAdd = this.submitAdd.bind(this);


    }

    componentDidMount() {
        this.props.dispatch(fetchAllIwi())
    }

    handleSubmit(e) {
        e.preventDefault()

        const rahui = {
            userId: getUserTokenInfo().user_id,
            region: this.state.region,
            iwi: this.state.iwi,
            hapu: this.state.hapu,
            description: this.state.description,
            geoRef: this.props.coordinates,
            korero: this.state.korero,
            datePlaced: this.state.datePlaced,
            dateLifted: this.state.dateLifted,
            contact: this.state.contact,
            authoriser: this.state.authoriser
        }

        // should be a dispatching an action
        writeRahui(
            rahui
        ).then(
            () => {
                this.props.dispatch(fetchAllRahui())
            }
        )

        window.location = `/#/explore`
    }

    submitAdd(){
        let region = [...this.state.region, this.state.regionSelected]
        let iwi= [...this.state.iwi, this.state.iwiSelected]
        let hapu = [...this.state.hapu, this.state.hapuSelected]

        this.setState({
            region:[...new Set(region)],
            iwi:[...new Set(iwi)],
            hapu:[...new Set(hapu)],
            regionSelected: null,
            iwiSelected: null,
            hapuSelected: null,
            iwihapuboxIsVisible: true
        })
        
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value });
    }

    handleSelect(event) {
        this.setState({
            regionSelected: event.target.value
        });
    }

    handleSelect2(event) {
        this.setState({
            iwiSelected: event.target.value
        });
    }

    handleSelect3(event) {
        this.setState({
            hapuSelected: event.target.value
        });
    }

    renderIwi() {
        const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]

        if (allIwiInRegion.length > 0) {

            return allIwiInRegion.map(iwi => {
                return < option htmlFor="iwi" > {Object.keys(iwi)[0]}</option >
            })
        }
    }
    renderHapu() {
        const allIwiInRegion = this.props.alliwi[this.props.area.indexOf(this.state.regionSelected)][this.state.regionSelected]
        const iwiIWant = this.state.iwiSelected
        const theIwiIFound = allIwiInRegion.filter(iwi => {
            return iwi[iwiIWant] != undefined
        })
        const allHapu = theIwiIFound[0][iwiIWant]
        if (allHapu.length > 0) {
            return allHapu.map(hapu => {
                return <option htmlFor="hapu">{hapu}</option>;
            })
        }
        else (<option>No hapū</option>)
    }
    render() {
        return (
           <div>   
                 <div>
                <form
                    onSubmit={this.handleSubmit}
                    noValidate
                >
                    <div>
                        <h1>Tāpirihia he Rāhui</h1>
                        <div className="step"> Takahia Tetahi</div>
                        <h2>Tomo mai ki tetahi rohe i runga i te mahere me te tuhi i tetahi waahanga mo te wahi e hiahia ana koe ki te whakatakoto i te rahui.</h2>
                        <hr></hr>
                        <div className="step">Takahia e Rua</div>
                        
                        <h2>Korero mai ki a matou te rahui. Ka tuhia enei korero ki te waa tirotiro.</h2>
                        
                        <h3>Tēnā koa tīpakohia te iwi me te hapū kua whakaturia te rahui:</h3>
                        
                            <p>Tīpako Rohe:</p>
                            <select onChange={this.handleSelect}>
                                {this.props.area.map(area => {
                                    return <option htmlFor="region">{area}</option>;
                                })}
                            </select>
                            <br></br>
                        
                            {<p>Tīpako Iwi:</p>}
                            <select onChange={this.handleSelect2}>
                                {this.state.regionSelected ? (this.renderIwi()) : <option>----------</option>}
                            </select>
                            <br></br>
                            
                            {<p>Tīpako Hapū:</p>}
                            <select onChange={this.handleSelect3}>
                                {this.state.iwiSelected ? (
                                    this.renderHapu()
                                ) : <option>----------</option>}
                            </select>
                            <br></br>
                            <button className="secondarybutton" type="button" onClick={this.submitAdd}>Add Another Associated Region/Iwi/Hāpu</button>
                    <br></br>
                        {this.state.iwihapuboxIsVisible ? 
                        <div className='iwihapubox'>
                        <h3> Iwi / hapu kua tīpakohia: </h3> <br></br>
                        <h3> iwi:{this.state.iwi.map(iwi => {return <p>{iwi}, </p>})} </h3>
                        <h3> hapu:{this.state.hapu.map(hapu => {return <p>{hapu}, </p>})} </h3>
                        </div> : null }
                    <br></br>
                    </div>
                    <br></br>
                    <br></br>
                    <p>Tēnā koa whakauruhia te ingoa o te tangata kua whakamanahia te Rahūi:</p>
                    <input name="authoriser" type="text" placeholder="Authorised by" noValidate onChange={this.handleChange} />
                    <br></br>
                    {/* <br></br>
                    <p>Please enter your name:</p>
                    <input name="submittersName" type="text" placeholder="Submitted by" />
                    <br></br> */}
                    <br></br>
                    <p>Kua whakanohoia te Rahūi ra:</p>
                    <input name="datePlaced" type="date" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <p>I whakanuia te Rahūi:</p>
                    <input name="dateLifted" type="date" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <p>Tēnā koa tāpirihia he whakaahua poto o te rahūi i konei:</p>
                    <textarea name="description" type="text" placeholder="whakaahua" rows="5" cols="60" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <p>Tēnā koa tāpirihia ētahi atu taipitopito o te rahūi i konei:</p>
                    <textarea name="korero" type="text" placeholder="korero" rows="10" cols="60" noValidate onChange={this.handleChange} />
                    <br></br>
                    <br></br>
                    <p>Tēnā koa tuhia ngā taipitopito whakapā ki konei</p>
                    <input name="contact" type="text" placeholder="Īmera" noValidate onChange={this.handleChange} />
                    <br></br>
                  
                    <button name="submit">Tāpirihia te Rāhui</button>
                </form>
                <div className="spaceme" />
            </div>            
           </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        alliwi: state.iwi,
        area: state.area,
        coordinates: state.coords,
        lang: state.toggle
    }
}
export default connect(mapStateToProps)(AddRahReo);