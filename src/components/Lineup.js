import React, { Component } from 'react'
import {connect} from 'react-redux'
import {returnBandName, returnVenueName} from '../helpers/helpers'

class Lineup extends Component {
    render() {
        const lineup = this.props.lineup.map((slot, i) => <p>{returnVenueName(slot.venue_id)} - {returnBandName(slot.band_id)}</p>)
        return (
            <div>
                {lineup}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        lineup: state.lineup.lineup
    }
}

export default connect(mapStateToProps)(Lineup)
