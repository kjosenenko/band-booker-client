import React, { Component } from 'react'
import {connect} from 'react-redux'
 
class Venues extends Component {
    render() {
        const venues = this.props.venues.map((venue, i) => <p>{venue.name}</p>)
        return (
            <div>
                {venues}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        venues: state.venues.venues
    }
}

export default connect(mapStateToProps)(Venues)
