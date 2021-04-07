import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-link"><Link className="btn btn-light" to="/">Home</Link></li>
                    <li className="nav-link"><Link className="btn btn-light" to="/lineup">Festival Schedule</Link></li>
                    <li className="nav-link"><Link className="btn btn-light" to="/artists">Artists</Link></li>
                    <li className="nav-link"><Link className="btn btn-light" to="/genres">Genres</Link></li>
                    <li className="nav-link"><Link className="btn btn-light" to="/venues">Venues</Link></li>
                    <li className="nav-link"><Link className="btn btn-light" to="/itinerary">My Itinerary</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
