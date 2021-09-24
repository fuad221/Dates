import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    return (
        <nav className="navbar bg-primary container">
            <h6> <Link to="/" className="link"> Home </Link></h6>
            <h6> <Link to="newdate" className="link">new date</Link></h6>
            <h6><Link to="/mydates" className="link">my dates</Link></h6>
        </nav>
    )
}

export default Nav
