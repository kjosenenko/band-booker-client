import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-link"><Link className="btn btn-light" to="/">Home</Link></li>
                    <li className="nav-link"><Link className="btn btn-light" to="/lineup">Artist Lineup</Link></li>
                    <li className="nav-link"><Link className="btn btn-light" to="/schedule">My Schedule</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
