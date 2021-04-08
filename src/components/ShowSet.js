import React, { Component } from 'react'

export class ShowSet extends Component {
    render() {
        const {time, venue, band} = this.props
        return (
            <div className="card" style={{width: "350px"}}>
                <h5 className="card-title">{time}</h5>
                <p className="card-text">{band}</p>
                <small className="card-text">{venue}</small>
                <button className="btn btn-primary">Add To Itinierary</button>
            </div>
        )
    }
}

export default ShowSet
