import React, { Component } from 'react'
import {connect} from 'react-redux'
import ShowSet from './ShowSet'

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
        const schedule = this.props.lineup.map((set, i) => 
            <ShowSet 
                key={i}
                time={this.formattedDate(set.time)}
                venue={this.returnVenueName(set.venue_id)}
                band={this.returnBandName(set.band_id)}
            />)
        return (
            <div>
                {schedule}
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
