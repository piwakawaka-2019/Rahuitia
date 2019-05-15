import React, { Component } from 'react'
import Button from './Button'
import { connect } from 'react-redux'
import { incrementCount, decrementCount } from '../actions/tautoko'

class Tautoko extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         disabled: false
    //     }

    // }
    handleBtnActionIncrement = () => {
        this.props.onIncrementClick(this.props.count)
        // this.forwardRef.btn.setAttribute("disabled", "disabled")
    }

    // handleBtnActionDecrement = () => {
    //     this.props.onDecrementClick(this.props.count)
    // }

    render() {
        const { count } = this.props
        return (
            <React.Fragment>
                <p>{count}</p>
                <Button action={this.handleBtnActionIncrement.bind(this)} buttonTitle="Tautoko" />


                {/* <Button action={this.handleBtnActionDecrement} buttonTitle="-" /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Tautoko)