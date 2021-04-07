import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Genres extends Component {
    render() {
        const genres = this.props.genres.map((genre, i) => <p>{genre.name}</p>) 
        return (
            <div>
                {genres}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        genres: state.genres.genres
    }
}

export default connect(mapStateToProps)(Genres)
