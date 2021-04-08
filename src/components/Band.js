import React, { Component } from 'react'

export class Band extends Component {
    render() {
        const {name, description, genre} = this.props
        return (
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <small>{genre}</small>
            </div>
        )
    }
}

export default Band
