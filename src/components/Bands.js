import React, { Component } from 'react'
import {connect} from 'react-redux'
import Band from './Band'

class Bands extends Component {
    returnGenreName(id) {
        const genre = this.props.genres.filter(g => {
            return g.id == id;
        })
        return genre[0].name
    }

    render() {
        const bands = this.props.bands.map((band, i) => 
            <Band 
                key={i} 
                name={band.name} 
                description={band.description} 
                genre={this.returnGenreName(band.genre_id)}
            />)
        return (
            <div>
                {bands}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        bands: state.bands.bands,
        genres: state.genres.genres
    }
}

export default connect(mapStateToProps)(Bands)
