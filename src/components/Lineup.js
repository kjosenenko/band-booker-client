import React, { Component } from 'react'
import {connect} from 'react-redux'

class Lineup extends Component {
    returnBandName(id) {
        const band = this.props.bands.filter(b => {
            return b.id == id;
        })
        return band[0].name
    }
    
    returnVenueName(id) {
        const venue = this.props.venues.filter(v => {
            return v.id == id;
        })
        return venue[0].name
    }

    formattedDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString() +' '+ date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }

    render() {
        const lineup = this.props.lineup.map((slot, i) => <p>{this.formattedDate(slot.time)} - {this.returnVenueName(slot.venue_id)} - {this.returnBandName(slot.band_id)}</p>)
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
        lineup: state.lineup.lineup,
        bands: state.bands.bands,
        venues: state.venues.venues
    }
}

export default connect(mapStateToProps)(Lineup)
