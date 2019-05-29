import React, { Component } from 'react'
import Button from '../Button'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '../../actions/tautoko'

class TautokoReo extends Component {

    handleBtnActionIncrement = () => {
        this.props.onIncrementClick(this.props.count)
  
    }

    render() {
        const { count } = this.props
        return (
            <React.Fragment>
                <div className="tautoko">

                <div><Button action={this.handleBtnActionIncrement.bind(this)} buttonTitle="Tautoko" /></div>
                

                <div className="respect">Whakaaetia te rahui? <br></br>Whakaatuhia to tautoko</div>
                

                <div className="count">{count}</div>
                
                <div className="tangata">tanagata tautoko</div>                
                </div>
                <hr></hr>
                <br/>

                
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        count: state.tautoko.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: (count) => {
            dispatch(incrementCount(count))
        },
        onDecrementClick: (count) => {
            if (count !== 0)
                dispatch(decrementCount(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TautokoReo)