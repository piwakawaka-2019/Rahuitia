import React from 'react'
// import data from '../apis/iwi'
import { connect } from "react-redux";
import { fetchAllIwi } from "../../actions/iwi";
import { writeRahui } from "../../apis/rahui"
import { fetchAllRahui } from '../../actions/rahui'
import AddRahEng from './AddRahEng'
import AddRahReo from './AddRahReo'
import { toggleLang } from "../../actions/toggle";


class AddRahuiForm extends React.Component {
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
            userId: 5,
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
        // console.log(rahui)
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
        console.log("blaine", this.state)
        let region = [...this.state.region, this.state.regionSelected]
        let iwi= [...this.state.iwi, this.state.iwiSelected]
        let hapu = [...this.state.hapu, this.state.hapuSelected]

        this.setState({
            region:[...new Set(region)],
            iwi:[...new Set(iwi)],
            hapu:[...new Set(hapu)],
            regionSelected: null,
            iwiSelected: null,
            hapuSelected: null
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
                <form
                    onSubmit={this.handleSubmit}
                    noValidate>
                    <div>
                {this.props.lang == "eng" ? <AddRahEng area={this.props.area} data={this.state}/> : <AddRahReo area={this.props.area} data={this.state}/>}
                   </div>
                </form>
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
export default connect(mapStateToProps)(AddRahuiForm);