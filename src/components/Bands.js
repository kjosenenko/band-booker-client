import React, { Component } from 'react'
import {connect} from 'react-redux'

class Bands extends Component {
    render() {
        const bands = this.props.bands.map((band, i) => <p>{band.name}</p>)
        return (
            <div>
                {bands}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bands: state.bands.bands
    }
}

export default connect(mapStateToProps)(Bands)
