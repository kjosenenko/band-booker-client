import React, { Component } from 'react'
import {connect} from 'react-redux'

class Lineup extends Component {
    render() {
        const lineup = this.props.lineup.map((band, i) => <p>{band.band_id}</p>)
        return (
            <div>
                {lineup}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lineup: state.lineup
    }
}

export default connect(mapStateToProps)(Lineup)
